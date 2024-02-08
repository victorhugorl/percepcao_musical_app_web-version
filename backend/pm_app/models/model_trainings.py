from django.db import models
from .model_training_type import TrainingType
class Trainings(models.Model):
    training_name = models.CharField(max_length=40)
    training_type = models.ForeignKey(
        TrainingType,
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    number_of_rounds = models.IntegerField()
    training_settings = models.JSONField()
    