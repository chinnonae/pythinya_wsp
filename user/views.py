from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import UserSerializer
from .models import User


class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        user = UserSerializer(data=request.data)
        user.is_valid()

        try:
            created = user.create(user.validated_data)
        except KeyError as err:
            if("email" in err.args):
                return Response({
                    "message": "The email has been used",
                    "status": 400
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
        return Response(
            {
                "token": str(created.auth_token),
                "status": 200
            }
        )


class UserView(APIView):

    def get(self, request, pk):
        if pk:
            user = User.objects.get(pk=pk)
        else:
            user = request.user

        serialized = UserSerializer(user)

        return Response(serialized.data)
