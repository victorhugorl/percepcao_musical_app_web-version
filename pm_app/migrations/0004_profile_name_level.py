# Generated by Django 5.0.1 on 2024-06-27 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pm_app', '0003_alter_game_player_profile_delete_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='name_level',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
