from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, ListingDetailSerializer
from datatime import datetime as dt, timezone as tz, timedetla as td

class ListingsView(ListAPIView):
    queryset = Listing.object.order_by('-list_date').filter_by(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'
    
class ListingView(RetrieveAPIView):
    queryset = Listing.object.order_by('-list_date').filter_by(is_published=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'
    
class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    def post(self, request, format=None):
        queryset = Listing.object.order_by('-list_date').filter_by(is_published=True)
        data = self.request.data
        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)
        price = data['price']
        if price == '$0+':
            price = 0
        elif price == '$200,000+':
            price = 200000
        elif price == '$400,000+':
            price = 400000
        elif price == '$600,000+':
            price = 600000
        elif price == '$800,000+':
            price = 800000
        elif price == '$1,000,000+':
            price = 1000000
        elif price == '$1,200,000+':
            price = 1200000
        elif price == '$1,400,000+':
            price = 1400000
        elif price == 'Any':
            price = -1
        if price != -1:
            queryset = queryset.filter(price__gte=price)
        bedrooms = data['bedrooms']
        if bedrooms == '0+':
            bedrooms = 0
        elif bedrooms == '1+':
            bedrooms = 1
        elif bedrooms == '2+':
            bedrooms = 2
        elif bedrooms == '3+':
            bedrooms = 3
        elif bedrooms == '4+':
            bedrooms = 4
        elif bedrooms == '5+':
            bedrooms = 5
        queryset = queryset.filter(bedrooms__gte=bedrooms)
        # 21:38 / 45:32 •View Setup