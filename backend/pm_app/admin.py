from django.contrib import admin
from pm_app.models.model_progress import Progress
from pm_app.models.model_training_type import TrainingType
from pm_app.models.model_trainings import Training
from pm_app.models.model_chord_notes import ChordNote


# Register your models here.
@admin.register(Progress)
class ProgressAdmin(admin.ModelAdmin):
    list_display = 'id', 'training_name', 'punctuation', 'finished_rounds', 'percentage_progress'
    ordering = 'id',
    search_fields = 'id', 'training_name'
    list_per_page = 10
    list_max_show_all = 200
    list_display_links = 'id', 

@admin.register(TrainingType)
class TrainingTypeAdmin(admin.ModelAdmin):
    list_display = 'id', 'type_training',
    list_per_page = 10
    list_max_show_all = 200
    list_display_links = 'id', 

@admin.register(Training)
class TrainingAdmin(admin.ModelAdmin):
    list_display = 'id', 'training_name', 'training_type','number_of_rounds', 'training_settings'
    list_per_page = 10
    list_max_show_all = 200
    list_display_links = 'id', 

@admin.register(ChordNote)
class ChordNoteAdmin(admin.ModelAdmin):
    list_display = 'id', 'song_name', 'song_link',
    list_per_page = 10
    list_max_show_all = 200
    list_display_links = 'id',