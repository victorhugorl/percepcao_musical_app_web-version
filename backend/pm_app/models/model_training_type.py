from django.db import models

class TrainingType(models.Model):
    type_training = models.CharField(max_length=30)
