from rest_framework import serializers
from .models import *

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ChordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chord
        fields = '__all__'


class GameTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameType
        fields = '__all__'

    
class UserSerializer(serializers.ModelSerializer):

    user = serializers.CharField(source='username')
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['user', 'email', 'password']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email já está em uso.")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        username = validated_data.pop('username')
        user = User.objects.create(username=username, **validated_data)
        user.set_password(password)
        user.is_staff = False
        user.is_superuser = False
        user.save()
        return user