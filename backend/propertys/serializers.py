from rest_framework import serializers
from .models import Property
from users.models import User
# from users.serializers import UserSerializer


class PropertySerializer(serializers.ModelSerializer):
    # users = UserSerializer(
    #     many=False, 
    #     read_only=True, 
    #     source='user'
    # )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user',
    )
    
    class Meta:
        model = Property
        fields = '__all__'
        extra_fields = ('user')
        ordering = ('-date_created')
