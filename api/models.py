from ticket_system.serializers import TicketSerializer
from ticket_system.models import Clientship, Ticket
from user.serializers import UserSerializer, BoosterProfileSerializer
from payment.models import TopupRate
from user.models import User, BoosterProfile

import math
import datetime

class BoosterTicketAction:

    def __init__(self, user, ticket=None):
        self.user = user
        self.ticket = ticket

    def create_ticket(self, min_mmr, max_mmr, day_used, price):
        if not self.user.is_booster:
            return None, "You are not a booster."
        if UserService(self.user).boosting_ticket() is not None:
            return None, "You cannot create more ticket while there is incomplete ticket."

        ticket_serializer = TicketSerializer(data={
            "min_mmr": min_mmr,
            "max_mmr": max_mmr,
            "day_used": day_used,
            "price": price,
            "status": 1,
            "booster": self.user.id
        })
        if not ticket_serializer.is_valid():
            return None, "The data is invalid."

        ticket_instance = ticket_serializer.save()

        return ticket_instance, None

    def complete_ticket(self):
        if self.user.id != self.ticket.booster.id:
            return None, "You are not the owner."
        if self.ticket.status == 1:
            return None, "You have not selected your client."
        if self.ticket.status == 3:
            return None, "Your client have not paid you."
        if self.ticket.status == 4:
            return None, "The ticket was completed."

        self.ticket.status = 4
        self.ticket.save()

        self.user.boosted_time += 1
        self.user.save()

        return self.ticket, None

    def update_ticket_mmr_progress(self, new_current_mmr):
        # if (type(new_current_mmr) is not int) or new_current_mmr.isdecimal():
        #     return None, "The MMR value is not valid"
        if self.user.id != self.ticket.booster.id:
            return None, "You are not the owner."
        if self.ticket.status == 1:
            return None, "You have not selected your client."
        if self.ticket.status == 3:
            return None, "Your client have not paid you."
        if self.ticket.status == 4:
            return None, "The ticket was completed."

        new_current_mmr = int(new_current_mmr)
        self.ticket.current_mmr = new_current_mmr
        self.ticket.save()

        return self.ticket, "Current MMR is updated to %d" % new_current_mmr

    def start_boosting(self, client):
        if client is None:
            return None, "User not exist"
        if self.user.id != self.ticket.booster.id:
            return None, "You are not the owner."
        if self.ticket.status == 2:
            return None, "You already started boosting."
        if self.ticket.status == 3:
            return None, ""
        if self.ticket.status == 4:
            return None, "The ticket was completed."

        # delete all clients except the chosen
        self.ticket.clients.through.objects.filter(ticket=self.ticket).exclude(client=client).delete()
        # set ticket status to waiting for payment
        self.ticket.status = 3
        self.ticket.save()

        return self.ticket, "You pick %s to boost his/her MMR." % client.get_full_name()

    def remove_ticket(self):
        if self.user.id != self.ticket.booster:
            return None, "You do not own this ticket."

        user_ticket_action = UserTicketAction(self.user, self.ticket)
        user_ticket_action.booster_cancel_ticket()

        total_deleted_row, table_deleted_row = self.ticket.delete()

        return table_deleted_row, "Ticket has been removed."


class ClientTicketAction:

    def __init__(self, user, ticket=None):
        self.user = user
        self.ticket = ticket

    def purchase_ticket(self):
        if self.user.id == self.ticket.booster.id:
            return None, "You cannot buy your own ticket."
        if self.ticket.status == 1:
            return None, "Booster haven't chosen a client."
        if self.ticket.status == 2:
            return None, "The ticket was already bought."
        if self.ticket.status == 4:
            return None, "The ticket was completed."
        if self.ticket.clients.first().id != self.user.id:
            return None, "The booster didn't choose you to boost your MMR."
        if self.user.coin < self.ticket.price:
            return None, "You don't have enough coin to buy this ticket."

        self.ticket.status = 2
        self.ticket.save()

        self.user.coin -= self.ticket.price
        self.user.save()

        return self.ticket, "purchase successful."

    def pick_ticket(self):
        if self.user.id == self.ticket.booster.id:
            return None, "You cannot pick your own ticket."
        if self.ticket.status != 1:
            return None, "The ticket is unavailable."
        if self.ticket.clients.filter(pk=self.user.id).first() is not None:
            return None, "You already picked the ticket."

        clientship = self.ticket.clients.through.objects.create(client=self.user, ticket=self.ticket)

        return clientship, "You pick the ticket."


class UserTicketAction:

    def __init__(self, user, ticket):
        self.user = user
        self.ticket = ticket

    def cancel_ticket(self):
        if self.ticket.clients.filter(pk=self.user.id).first() is None and self.ticket.booster != self.user.id:
            return None, "You already cancelled this ticket, or you never pick this ticket."
        if self.ticket.status == 4:
            return None, "This ticket is completed."

        if self.ticket.booster == self.user.id:
            return self.booster_cancel_ticket()
        return self.client_cancel_ticket()

    def booster_cancel_ticket(self):
        if self.ticket.booster.status == 1:
            return None, "You cannot cancel a ticket while it is still available."

        if self.ticket.booster.status == 2:
            client = self.ticket.clients.all().first()
            client.coin += self.ticket.price
            client.save()

        # delete all ticket's clients
        Clientship.objects.filter(ticket=self.ticket).delete()

        self.ticket.status = 1
        self.ticket.save()

        return self.ticket, "The service is cancelled."

    def client_cancel_ticket(self):
        if self.ticket.clients.filter(pk=self.user.id).first is None:
            return None, "You did not pick this ticket."

        if self.ticket.status == 3:
            self.user.coin -= math.ceil(0.10 * self.ticket.price)
            self.user.save()

        delete_info = Clientship.objects.get(ticket=self.ticket, client=self.user).delete()
        return delete_info, "The ticket is cancelled."


class UserService:

    def __init__(self, user=None):
        self.user = user

    def profile(self):

        return UserSerializer(self.user).data

    def boosting_ticket(self):
        boosting_ticket = Ticket.objects.filter(booster=self.user)\
            .exclude(status=4)\
            .first()

        return boosting_ticket

    def holding_ticket(self):
        holding_ticket = Ticket.objects.filter(clients=self.user)\
            .exclude(status=4)\
            .first()

        return holding_ticket

    def boosting_history(self):
        completed_tickets = Ticket.objects.filter(booster=self.user)\
            .filter(status=4)

        return completed_tickets

    def current_client_contact(self):
        boosting_ticket = self.boosting_ticket()

        return boosting_ticket.clients.all()

    def register(self, **info):
        serialized_user = UserSerializer(data=info)

        if not serialized_user.is_valid():
            return None, "Some field is not valid", serialized_user.errors

        print(serialized_user.validated_data)
        self.user = serialized_user.create(serialized_user.validated_data)
        return self.user, "Register successful", None


class PaymentService:

    def topup_list(self):
        available_topups = TopupRate.objects.filter(status=0)

        return available_topups, None


class UserPaymentAction:

    def __init__(self, user):
        self.user = user

    def topup(self, topup_rate):
        self.user.coin += topup_rate.coin
        self.user.save()

        return self.user


class AdminUserAction:

    def __init__(self, admin, user):
        self.admin = admin
        self.user = user

    def ban(self, duration_in_days):
        self.user.ban_util = datetime.datetime.now() + datetime.timedelta(days=duration_in_days)
        self.user.save()

        return self.user, "The user is banned until %s" % self.user.ban_util

    def unban(self):
        self.user.ban_util = None
        self.user.save()

        return self.user, "The user is unbanned"

    def approve_booster(self):
        self.user.is_active = True
        self.user.save()

        return self.user, "The user is an approved booster"

    def deny_booster(self):
        delete_result = self.user.delete()

        return delete_result, "Booster registration have been removed"


class AdminUserList:

    def __init__(self, admin):
        self.admin = admin

    def all(self):
        return User.objects.all().exclude(is_admin=True)

    def client_with_ticket_status(self):
        all_users = self.all().exclude(is_booster=True)

        user_fields = ('id', 'first_name', 'last_name', 'email', 'coin')

        results = []
        for user in all_users:

            serialized_user = UserSerializer(user).data
            result = {}
            for user_field in user_fields:
                result[user_field] = serialized_user[user_field]

            ticket = UserService(user).holding_ticket()
            result['currentMMR'] = int(ticket.currentMMR) if ticket is not None else -1
            result['status'] = int(ticket.status) if ticket is not None else 1

            results.append(result)

        return results

    def booster_with_ticket_status(self):
        all_boosters = self.all().filter(is_booster=True).filter(is_active=True)

        user_fields = ('id', 'first_name', 'last_name', 'email', 'coin')

        results = []
        for user in all_boosters:

            serialized_user = UserSerializer(user).data
            result = {}
            for user_field in user_fields:
                result[user_field] = serialized_user[user_field]

            ticket = UserService(user).boosting_ticket()
            booster_profile = BoosterProfileSerializer(BoosterProfile.objects.get(user=user.id)).data
            result['currentMMR'] = int(booster_profile['current_mmr'])
            result['status'] = int(ticket.status) if ticket is not None else 1

            results.append(result)

        return results

    def pending_booster(self):
        all_booster = self.all().filter(is_booster=True).filter(is_active=False)

        return all_booster

