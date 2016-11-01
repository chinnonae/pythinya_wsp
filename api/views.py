from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from ticket_system.models import Ticket
from ticket_system.serializers import TicketSerializer
from user.serializers import UserSerializer
from user.models import User

from .models import BoosterTicketAction, ClientTicketAction


class TicketView(APIView):

    def get(self, request):
        queryset = Ticket.objects.all().filter(status=1)

        start_mmr = self.request.query_params.get('start_mmr', None)
        ending_mmr = self.request.query_params.get('ending_mmr', None)

        if start_mmr is not None or ending_mmr is not None:
            result = queryset.filter(min_mmr__lte=start_mmr).filter(max_mmr__gte=ending_mmr)
        else:
            result = queryset

        serialized = TicketSerializer(result, many=True)
        return Response({
            "result": serialized.data,
            "status": 200
        }, status=200)

    def post(self, request):
        booster_ticket_action = BoosterTicketAction(request.user)
        ticket_data = booster_ticket_action.create_ticket(
            request.data.get("min_mmr", None),
            request.data.get("max_mmr", None),
            request.data.get("day_used", None),
            request.data.get("price", None)
        )
        return Response(ticket_data)


class TicketDetailView(APIView):

    def get(self, request, pk):
        return Response({
            "ticket": TicketSerializer(Ticket.objects.get(pk=pk)).data,
            "status": 200
        })


class TicketPurchaseView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        client_ticket_action = ClientTicketAction(request.user, ticket)

        error, message = client_ticket_action.purchase_ticket()

        return Response({
            "message": message,
            "status": 200
        })


class TicketProgressView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        booster_ticket_action = BoosterTicketAction(request.user, ticket)
        new_current_mmr = request.data.get("current_mmr", None)

        error, message = booster_ticket_action.update_ticket_mmr_progress(new_current_mmr)
        return Response({
            "message": message
        }, status=200)


class TicketCancelView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)

        ticket.client = None
        ticket.status = 1
        ticket.save()

        return Response({
            "message": "cancel ticket successfully",
            "status": 200
        }, status=200)


class TicketCompleteView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        booster_ticket_action = BoosterTicketAction(request.user, ticket)

        error, message = booster_ticket_action.complete_ticket()

        return Response({
            "message": message,
            "status": 200
        }, status=200)


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
                })
        return Response(
            {
                "token": str(created.auth_token),
                "status": 200
            },
            status=200,
        )


class UserView(APIView):

    def get(self, request, pk):
        if pk:
            user = User.objects.get(pk=pk)
        else:
            user = request.user

        serialized = UserSerializer(user)

        return Response(
            {
                "user": serialized.data,
                "status": 200
            },
            status=200
        )