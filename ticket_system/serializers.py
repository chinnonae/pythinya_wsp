from rest_framework import serializers

from user.models import User
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = '__all__'