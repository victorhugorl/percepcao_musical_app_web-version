from django.contrib import admin
from pm_app import models
# Register your models here.

@admin.register(models.Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = 'id', 'user', 'level',
    ordering = '-id',
    search_fields = 'id', 'user',
    list_per_page = 10
    list_max_show_all = 100