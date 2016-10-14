from rest_framework.authentication import TokenAuthentication
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from user.serializers import UserSerializer
from .models import User


class Register(APIView):
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        user = UserSerializer(data=request.data)
        user.is_valid()
        user.create(user.validated_data)

        return Response(user.data)


class UserView(APIView):
    renderer_classes = (JSONRenderer,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def get(self, request, pk):
        if pk:
            user = User.objects.get(pk=pk)
        else:
            user = request.user

        serialized = UserSerializer(user)

        return Response(serialized.data)

