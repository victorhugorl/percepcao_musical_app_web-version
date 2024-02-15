from django.db import models

class TrainingType(models.Model):

    type_training = models.CharField(max_length=30)

    def __str__(self):
        return self.type_training
