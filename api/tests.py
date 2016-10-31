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
        print('aaaaaa1')
        booster_ticket_action = models.BoosterTicketAction(user=self.booster)
        min_mmr = 1000
        max_mmr = 2500
        day_used = 10
        price = 2000
        error, ticket_data = booster_ticket_action.create_ticket(min_mmr, max_mmr, day_used, price)

        self.assertEquals(min_mmr, ticket_data.get('min_mmr'))
        self.assertEquals(max_mmr, ticket_data.get('max_mmr'))
        self.assertEquals(day_used, ticket_data.get('day_used'))
        self.assertEquals(price, ticket_data.get('price'))
        self.assertEquals(self.booster.id, ticket_data.get('booster').get('id'))
        self.assertEquals([], ticket_data.get('clients'))
        self.assertEquals(1, ticket_data.get('status'))

    def test_2_ticket_create_error(self):
        """Ticket cannot be created by normal user"""
        print('aaaaaa2')
        booster_ticket_action = models.BoosterTicketAction(user=self.user)
        min_mmr = 1000
        max_mmr = 4000
        day_used = 5
        price = 10000
        error, ticket = booster_ticket_action.create_ticket(min_mmr, max_mmr, day_used, price)

        self.assertIsNotNone(error)

    def test_3_ticket_taken_by_its_own_booster_error(self):
        """Ticket cannot be taken by the booster who created it"""
        print('aaaaaa3')
        client_ticket_action = models.ClientTicketAction(user=self.booster, ticket=self.ticket)
        error, message = client_ticket_action.take_ticket()

        self.assertIsNotNone(error)

    def test_4_ticket_taken_by_user(self):
        """Ticket can be taken by a user, if it is not already taken by the user"""
        print('aaaaaa4')
        client_ticket_action = models.ClientTicketAction(user=self.user, ticket=self.ticket)
        error, message = client_ticket_action.take_ticket()

        self.assertIsNone(error)

    def test_5_ticket_taken_by_current_client_error(self):
        """Ticket cannot be taken be a user, who already took it"""
        print('aaaaaa5')
        client_ticket_action = models.ClientTicketAction(user=self.user, ticket=self.ticket)
        error, message = client_ticket_action.take_ticket()

        self.assertIsNotNone(error)

    def test_6_ticket_taken_when_unavailable(self):
        """Ticket cannot be taken when it is not available"""
        print('aaaaaa6')
        self.fail("Unimplemented")

    def test_7_ticket_complete_by_booster(self):
        """Ticket can be set to complete by booster,
        if the status is boosting"""
        print('aaaaaa7')

        booster_ticket_action = models.BoosterTicketAction(self.booster)
        self.fail("Unimplemented")

