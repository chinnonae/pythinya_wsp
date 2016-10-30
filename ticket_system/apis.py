from .serializers import TicketSerializer

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


class ClientTicketAction:

    def __init__(self, user, ticket=None):
        self.user = user
        self.ticket = ticket

    def purchase_ticket(self):
        self.ticket.client = self.user
        self.ticket.status = 2
        self.ticket.save()
        return None, "purchase successful"


