from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from ticket_system.models import Ticket
from ticket_system.serializers import TicketSerializer
from user.serializers import UserSerializer
from user.models import User

from .models import BoosterTicketAction, ClientTicketAction, UserService


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
        ticket, message = booster_ticket_action.create_ticket(
            request.data.get("min_mmr", None),
            request.data.get("max_mmr", None),
            request.data.get("day_used", None),
            request.data.get("price", None)
        )

        if ticket is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "ticket": TicketSerializer(ticket).data,
            "status": 200
        })


class TicketDetailView(APIView):

    def get(self, request, pk):
        ticket = Ticket.objects.filter(pk=pk).first()

        if ticket is None:
            return Response({
                "message": "Ticket you request does not exist.",
                "status": 400
            }, status=400)
        return Response({
            "ticket": TicketSerializer(Ticket.objects.get(pk=pk)).data,
            "status": 200
        })


class TicketPurchaseView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        client_ticket_action = ClientTicketAction(request.user, ticket)

        result, message = client_ticket_action.purchase_ticket()

        if result is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "message": message,
            "status": 200
        })


class TicketPickView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        client_ticket_action = ClientTicketAction(request.user, ticket)

        result, message = client_ticket_action.pick_ticket()

        if result is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "massage": message,
            "status": 200
        })


class TicketProgressView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        booster_ticket_action = BoosterTicketAction(request.user, ticket)
        new_current_mmr = request.data.get("current_mmr", None)

        result, message = booster_ticket_action.update_ticket_mmr_progress(new_current_mmr)

        if result is None:
            return Response({
                "message": message,
                "status": 400
            })
        return Response({
            "message": message,
            "status": 200
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

        result, message = booster_ticket_action.complete_ticket()

        if result is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "message": message,
            "status": 200
        }, status=200)


class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        user_service = UserService()

        result, message, error_field = user_service.register(**request.data)
        if result is None:
            return Response({
                "message": message,
                "error_field": error_field,
                "status": 400
            }, status=400)
        return Response({
            "message": message,
            "token": str(result.auth_token),
            "status": 200
        }, status=200)


class UserView(APIView):

    def get(self, request, pk):
        if pk:
            user = User.objects.filter(pk=pk).first()
        else:
            user = request.user
        user_service = UserService(user)

        if user is None:
            return Response({
                "message": "User does not exist",
                "status": 400
            }, status=400)

        boosting_ticket = user_service.boosting_ticket()
        holding_ticket = user_service.holding_ticket()
        if boosting_ticket is not None:
            boosting_ticket = TicketSerializer(boosting_ticket).data
        holding_ticket = TicketSerializer(holding_ticket, many=True).data
        return Response({
            "user": user_service.profile(),
            "boosting_ticket": boosting_ticket,
            "holding_ticket": holding_ticket,
            "status": 200
        })


class ChooseClientView(APIView):

    def put(self, request, pk, client_id):
        ticket = Ticket.objects.filter(pk=pk).first()
        booster_ticket_action = BoosterTicketAction(request.user, ticket)
        client = User.objects.filter(pk=client_id).first()

        result, message = booster_ticket_action.start_boosting(client)

        if result is None:
            return Response({
                "message": message,
                "status": 400
            })
        return Response({
            "message": message,
            "status": 200
        })


class TicketHistoryView(APIView):

    def get(self, request):
        user = request.user
        user_service = UserService(user)

        ticket_history = UserService.boosting_history()

        return Response({
            "tickets": TicketSerializer(ticket_history, many=True).data,
            "status": 200
        })