from django.utils.translation import ugettext as _

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.parsers import FileUploadParser, MultiPartParser

from ticket_system.models import Ticket
from ticket_system.serializers import TicketSerializer
from user.serializers import UserSerializer, BoosterProfileSerializer
from user.models import User, BoosterProfile
from payment.serializers import TopupRateSerializer
from payment.models import TopupRate

from .models import BoosterTicketAction, ClientTicketAction, UserService, UserPaymentAction, PaymentService, UserTicketAction, AdminUserList, AdminUserAction


import hashlib
import uuid
import os

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
        temp_dict = dict(request.data.items())
        result, message, error_field = user_service.register(**temp_dict)

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


class UserInterestedTicketView(APIView):

    def get(self, request):
        interested_ticket = Ticket.objects.filter(clients=request.user, status=1)

        return Response({
            "tickets": TicketSerializer(interested_ticket, many=True).data,
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


class TicketCancelView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk)
        user_ticket_action = UserTicketAction(request.user, ticket)

        result, message = user_ticket_action.cancel_ticket()

        if result is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "message": message,
            "status": 200
        })


class TicketRemoveView(APIView):

    def delete(self, request, pk):
        ticket = Ticket.objects.get(pk)
        booster_ticket_action = BoosterTicketAction(request.user, ticket)

        result, message = booster_ticket_action.remove_ticket()

        if result is None:
            return Response({
                "message": message,
                "status": 400
            }, status=400)
        return Response({
            "message": message,
            "status": 200
        })


class TopupListView(APIView):

    def get(self, request):
        payment_service = PaymentService()
        available_topups, message = payment_service.topup_list()
        serialized = TopupRateSerializer(available_topups, many=True)
        return Response({
            "packages": serialized.data,
            "status": 200
        })


class TopupView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        topup_rate = TopupRate.objects.get(pk)
        serialized = TopupRateSerializer(topup_rate)
        return Response({
            "package": serialized.data,
            "status": 200
        })

    def post(self, request, pk):
        user_payment_action = UserPaymentAction(request.user)

        topup_rate = TopupRate.objects.get(pk=pk)
        user_payment_action.topup(topup_rate)

        return Response({
            "message": "Successful",
            "status": 200
        })


class BoosterRegister(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (MultiPartParser,)

    def post(self, request):
        id_card_image = request.FILES['id_card']
        print(request.data)
        homedir = os.path.expanduser('~')
        new_filename = str(hashlib.md5((str(uuid.uuid4()) + id_card_image.name).encode('utf-8')).hexdigest())
        new_filepath = homedir + '/pythinya/image/booster_id_card/' + new_filename
        destination = open(new_filepath, 'wb+')

        for chunk in id_card_image.chunks():
            destination.write(chunk)
        destination.close()

        user_service = UserService()
        temp_dict = dict(request.data.items())
        temp_dict['is_active'] = False
        result, message, error_field = user_service.register(**temp_dict)
        booster = BoosterProfile.objects.create(
            current_mmr=temp_dict['current_mmr'],
            id_card_image_src=new_filename,
            steam_id=temp_dict['steam_id'],
            user=result
        )

        return Response({
            'profile': BoosterProfileSerializer(booster).data
        })


class ClientWithTicketServiceDetail(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):

        return Response({
            "clients": AdminUserList(None).client_with_ticket_status()
        })


class BoosterWithTicketServiceDetail(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):

        return Response({
            "boosters": AdminUserList(None).booster_with_ticket_status()
        })


class BoosterApproval(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, pk):
        user = User.objects.get(pk=pk)
        user_obj, message = AdminUserAction(None, user).approve_booster()

        return Response({
            "message": message
        })


class BoosterDenial(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, pk):
        user = User.objects.get(pk=pk)
        delete_result, message = AdminUserAction(None, user).deny_booster()

        return Response({
            "message": message
        })


class PendingBoosterList(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        pending_boosters = User.objects.filter(is_active=False).filter(is_booster=True)
        booster_profiles = BoosterProfile.objects.filter(user=pending_boosters)

        return Response({
            "pending_booster": BoosterProfileSerializer(booster_profiles, many=True)
        })
