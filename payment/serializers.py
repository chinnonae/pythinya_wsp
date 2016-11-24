from rest_framework.serializers import ModelSerializer

from .models import TopupRate


class TopupRateSerializer(ModelSerializer):

    class Meta:
        fields = ('id', 'baht', 'coin')
        model = TopupRate

