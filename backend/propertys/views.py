from rest_framework import generics, permissions
from .models import Property
from .serializers import PropertySerializer

class PropertyList(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Property
        fields = ('__all__')
        ordering = ('-date_created')
        
class PropertyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer