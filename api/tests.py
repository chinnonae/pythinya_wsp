from django.test import TestCase
from user.models import User
from ticket_system.models import Ticket
from . import models


class BoosterTicketActionTestCase(TestCase):
    def setUp(self):
        self.booster = User.objects.create_user(
                'first@pythinya.com',
                '12345',
                first_name='first',
                last_name='second',
                telephone='0800000001',
                is_booster=True
            )
        self.user = User.objects.create_user(
                'user@pythinya.com',
                '12345',
                first_name='user',
                last_name='pythinya',
                telephone='0900000001',
            )
        self.ticket = Ticket.objects.create(
                min_mmr=1000,
                max_mmr=5000,
                booster=self.booster,
                day_used=30,
                status=1,
                price=8000
            )

    def tearDown(self):
        User.objects.all().delete()
        Ticket.objects.all().delete()

    def test_1_ticket_can_be_created_by_booster(self):
        """Ticket is created correctly by booster"""
        booster_ticket_action = models.BoosterTicketAction(user=self.booster)
        min_mmr = 1000
        max_mmr = 2500
        day_used = 10
        price = 2000
        ticket, message = booster_ticket_action.create_ticket(min_mmr, max_mmr, day_used, price)

        self.assertEquals(min_mmr, ticket.min_mmr)
        self.assertEquals(max_mmr, ticket.max_mmr)
        self.assertEquals(day_used, ticket.day_used)
        self.assertEquals(price, ticket.price)
        self.assertEquals(self.booster.id, ticket.booster)
        self.assertEquals(0, ticket.clients.count())
        self.assertEquals(1, ticket.status)

    def test_2_ticket_user_create_error(self):
        """Ticket cannot be created by normal user"""
        booster_ticket_action = models.BoosterTicketAction(user=self.user)
        min_mmr = 1000
        max_mmr = 4000
        day_used = 5
        price = 10000

        ticket, message = booster_ticket_action.create_ticket(min_mmr, max_mmr, day_used, price)

        self.assertIsNone(ticket)
        self.assertEquals(message, "You are not a booster.")

    def test_3_ticket_create_ticket_by_booster_own_incomplete_ticket(self):
        """Ticket cannot be created by a booster who own incomplete ticket"""
        booster_ticket_action = models.BoosterTicketAction(user=self.booster)
        booster_ticket_action.create_ticket(1, 1, 1, 1)

        ticket, message = booster_ticket_action.create_ticket(1, 1, 1, 1)

        self.assertIsNone(ticket)
        self.assertEquals(message, "You cannot create more ticket while there is incomplete ticket.")