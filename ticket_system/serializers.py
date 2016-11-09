from rest_framework import serializers

from user.models import User
from user.serializers import UserSerializer
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = '__all__'

    def to_representation(self, instance):
        fields = ('id', 'min_mmr', 'current_mmr', 'max_mmr', 'booster', 'day_used', 'status', 'price')

        dict = {}
        for field in fields:
            value = getattr(instance, field)
            dict[field] = value
            if isinstance(value, User):
                dict[field] = UserSerializer(value).data
        clientships = instance.clientship_set.all()
        dict['clients'] = []
        for clientship in clientships:
            temp_dict = UserSerializer(clientship.client).data
            temp_dict['contact_date'] = clientship.date_created
            dict['clients'].append(temp_dict)

        return dict
