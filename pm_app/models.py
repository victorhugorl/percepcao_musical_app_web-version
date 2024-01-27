from django.db import models



class User(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    salt = models.CharField(max_length=255)
    




class Jogo(models.Model):
    jogador = models.ForeignKey(User, on_delete=models.CASCADE)
    



