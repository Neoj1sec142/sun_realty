from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('', PropertyList.as_view(), name='property_list'),
    path('<int:pk>', PropertyDetail.as_view(), name='property_detail'),
]