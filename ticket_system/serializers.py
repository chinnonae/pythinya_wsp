from rest_framework import serializers

from user.models import User
from user.serializers import UserSerializer
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = '__all__'

    def to_representation(self, instance):
        fields = ('id', 'min_mmr', 'current_mmr', 'max_mmr', 'booster', 'clients', 'day_used', 'status', 'price')

        dict = {}
        for field in fields:
            value = getattr(instance, field)
            dict[field] = value
            if isinstance(value, User):
                dict[field] = UserSerializer(value).data
        dict['clients'] = UserSerializer(getattr(instance, 'clients').all(), many=True).data
        return dict
