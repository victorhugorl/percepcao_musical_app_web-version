from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class WeeklyInformation(models.Model):
    # informação semanal de cada pessoa
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    offensive = models.IntegerField(default=0)
    conclusion = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    hits = models.IntegerField(default=0)
    time = models.IntegerField(default=0)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    level = models.BigIntegerField(default=0)
    level_percentage = models.IntegerField(default=0)
    actual_level = models.CharField(max_length=100, blank=True)

    def __str__(self) -> str:
        return self.user.username


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()
