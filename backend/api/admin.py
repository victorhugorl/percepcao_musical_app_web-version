from django.contrib import admin
from api.models import *


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    pass


@admin.register(Chord)
class ChordAdmin(admin.ModelAdmin):
    pass


@admin.register(GameType)
class GameTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    pass

@admin.register(WeeklyInformation)
class WeeklyInformationAdmin(admin.ModelAdmin):
    pass

