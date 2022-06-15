from unicodedata import name
from rest_framework import serializers
from .models import User, Property, Client, Note, Region
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Language
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    # NEW AS OF AUTH SETUP
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = User
        fields = ['id','email','first_name','last_name','username','password']
        ## OLD 
        # fields = [field.name for field in model._meta.fields]
        fields.append('posts')

        ## NEW AS OF AUTH SETUP
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
        extra_fields = ('property')

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        extra_fields = ('user')

class PropertySerializer(serializers.ModelSerializer):
    client_id = ClientSerializer(read_only=True)
    region_id = RegionSerializer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'
        extra_fields = ('user','language')

class UserAllDetailsSerializer(serializers.ModelSerializer):
    # houseplants = HouseplantSerializer(many = True, read_only = True)
    properties = PropertySerializer(many=True, read_only=True)
    clients = ClientSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = "__all__"
        # extra_fields = ('locations', 'houseplants')
        extra_fields = ('clients', 'properties')