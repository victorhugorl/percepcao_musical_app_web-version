from django.db import models
from .model_trainings import Training
from django.contrib.auth.models import User
from django.utils import timezone

class Progress(models.Model):
    class Meta:
        verbose_name = 'Progress'
        verbose_name_plural = 'Progress'
    
    training_name = models.ForeignKey(
        Training,
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    punctuation = models.BigIntegerField()
    finished_rounds = models.IntegerField()
    percentage_progress = models.IntegerField()
    created_date= models.DateTimeField(default=timezone.now)
    owner = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=True, null=True
    )
    def __str__(self):
        return f'{self.owner} made progress in {self.created_date}'