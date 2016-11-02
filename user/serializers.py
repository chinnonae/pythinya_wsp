from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'telephone', 'is_booster')
        extra_kwargs = {'password': {"write_only": True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            telephone=validated_data['telephone']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

