# Generated by Django 5.0.1 on 2024-06-27 13:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pm_app', '0004_profile_name_level'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='name_level',
            new_name='actual_level',
        ),
    ]
