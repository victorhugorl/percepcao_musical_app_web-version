from django.db import models
from .model_trainings import Trainings
from .model_user import User

class Progress(models.Model):
    training_name = models.ForeignKey(
        Trainings,
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    punctuation = models.BigIntegerField()
    finished_rounds = models.IntegerField()
    percentage_progress = models.IntegerField()
    owner = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=True, null=True
    )