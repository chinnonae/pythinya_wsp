from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Ticket
from .serializers import TicketSerializer
from user.serializers import UserSerializer

class TicketView(APIView):

    def get(self, request):
        queryset = Ticket.objects.all()

        start_mmr = self.request.query_params.get('start_mmr', 0)
        ending_mmr = self.request.query_params.get('ending_mmr', None)

        result = queryset.filter(min_mmr__lte=start_mmr).filter(max_mmr__gte=ending_mmr)

        serialized = TicketSerializer(result, many=True)
        return Response({
            "result": serialized.data,
            "status": 200
        }, status=200)

    def post(self, request):
        ticket = TicketSerializer(data={
            "min_mmr": int(request.data.get("min_mmr")),
            "max_mmr": int(request.data.get("max_mmr")),
            "day_used": int(request.data.get("day_used")),
            "booster": request.user.id,
            "status": 1,
        })
        ticket.is_valid()
        ticket.save()
        return Response(ticket.data)


class TicketDetailView(APIView):

    def get(self, request, pk):
        return Response({
            "ticket": TicketSerializer(Ticket.objects.get(pk=pk)).data,
            "status": 200
        })


class TicketPurchaseView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        ticket.client = request.user
        ticket.status = 2
        ticket.save()

        return Response({
            "message": "purchase successful",
            "status": 200
        })


class TicketProgressView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        updated_current_mmr = int(request.data.get('current_mmr', None))
        if updated_current_mmr is None:
            return Response({
                "message": "current_mmr is not found"
            }, status=400)

        ticket.current_mmr = updated_current_mmr
        ticket.save()
        return Response({
            "message": "current MMR is updated to %d." % updated_current_mmr
        }, status=200)


class TicketReserveView(APIView):

    def put(self, request, pk):
        ticket = Ticket.objects.get(pk=pk)
        client = request.user

        ticket.client = client
        ticket.status = 3
        ticket.save()

        return Response({
            "message": "reserve successfully",
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
