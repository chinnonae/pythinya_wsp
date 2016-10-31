from ticket_system.serializers import TicketSerializer
from ticket_system.models import Clientship, Ticket
from user.serializers import UserSerializer


class BoosterTicketAction:

    def __init__(self, user, ticket=None):
        self.user = user
        self.ticket = ticket

    def create_ticket(self, min_mmr, max_mmr, day_used, price):
        ticket = TicketSerializer(data={
            "min_mmr": min_mmr,
            "max_mmr": max_mmr,
            "day_used": day_used,
            "price": price,
            "status": 1,
            "booster": self.user.id
        })
        ticket.is_valid()
        ticket.save()

        return None, ticket.data

    def complete_ticket(self):
        self.ticket.status = 4
        self.ticket.save()

        return None, "ticket status updated to done"

    def update_ticket_mmr_progress(self, new_current_mmr):
        self.ticket.current_mmr = new_current_mmr
        self.ticket.save()

        return None, "current MMR is updated to %d" % new_current_mmr

    def start_boosting(self, client):
        cancelled_clients = Clientship.objects.all()\
            .filter(ticket=self.ticket)\
            .exclude(client=client)
        delete_rows = cancelled_clients.delete()

        return None


class ClientTicketAction:

    def __init__(self, user, ticket=None):
        self.user = user
        self.ticket = ticket

    def purchase_ticket(self):
        self.ticket.clients.add(self.user)
        self.ticket.save()

        return None, "purchase successful"

    def take_ticket(self):
        Clientship.objects.create(ticket=self.ticket, client=self.user)

        return None, "you have taken the ticket"

    def cancel_ticket(self):
        clientship = Clientship.objects.all().filter(client=self.user, ticket=self.ticket)
        clientship.delete()

        return None, "The ticket has been cancel"


class UserService:

    def __init__(self, user):
        self.user = user

    def profile(self):
        serialized = UserSerializer(self.user)

        return serialized.data

    def boosting_ticket(self):
        boosting_ticket = Ticket.objects.filter(booster=self.user)\
            .exclude(status=4).first()
        serialized = TicketSerializer(boosting_ticket)

        return serialized.data

    def holding_ticket(self):
        holding_ticket = Ticket.objects.filter(clients=self.user)\
            .exclude(status=4).first()
        serialized = TicketSerializer(holding_ticket)

        return serialized.data

    def boosting_history(self):
        boosting_history = Ticket.objects.filter(booster=self.user, status=4)\
            .order_by('-id')
        serialized = TicketSerializer(boosting_history, many=True)

        return serialized.data

    def client_contact(self):
        return None