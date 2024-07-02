from django.db import models
from django.contrib.auth.models import User

class Note (models.Model):
    note = models.CharField(max_length=20)
    audio_file = models.URLField(max_length=200)
    

class Chord (models.Model):
    chord = models.CharField(max_length=60)
    audio_file = models.URLField(max_length=200)


class GameType (models.Model):
    game_type = models.CharField(max_length=50)



class Game(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    game_type = models.ForeignKey(GameType, on_delete=models.SET_NULL, blank=True, null=True)
    completed = models.BooleanField(default=False)
    ended_at = models.DateField(default='')
