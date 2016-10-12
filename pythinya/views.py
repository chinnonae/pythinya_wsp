from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
from rest_framework.response import Response


class Register(APIView):
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        user = UserSerializer(data=request.data)
        user.is_valid()
        user.create(user.validated_data)

        return Response(user.data)
