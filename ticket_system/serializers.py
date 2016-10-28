from rest_framework import serializers

from user.models import User
from user.serializers import UserSerializer
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = '__all__'

    def to_representation(self, instance):
        fields = ('min_mmr', 'current_mmr', 'max_mmr', 'booster', 'client', 'day_used', 'status')

        dict = {}
        for field in fields:
            value = getattr(instance, field)
            dict[field] = value
            if isinstance(value, User):
                dict[field] = UserSerializer(value).data
        return dict
