from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from . import serializers
from . import models


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated)

    serializer_class = serializers.NoteSerializer
    queryset = models.Note.objects.all()

class UserViewSet(viewsets.ModelViewSet):

    http_method_names = ['post']
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()