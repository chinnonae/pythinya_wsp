from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Ticket
from .serializers import TicketSerializer

class TicketView(APIView):

    def get(self, request):
        queryset = Ticket.objects.all()
        min_mmr = self.request.query_params.get('min_mmr', 0)
        max_mmr = self.request.query_params.get('max_mmr', None)
        queryset.filter(min_mmr__gte=min_mmr)
        if max_mmr is not None:
            queryset.filter(max_mmr__lte=max_mmr)

        serialized = TicketSerializer(queryset, many=True)
        return Response({
            "result": serialized.data
        }, status=200)



    def post(self, request):
        pass


class TicketDetailView(APIView):

    def get(self, request, pk):
        pass


class TicketPurchaseView(APIView):

    def put(self, request, pk):
        pass


class TicketProgressView(APIView):

    def put(self, request, pk):
        pass




