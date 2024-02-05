from pm_app import views
from django.urls import path
from . import views

app_name = 'api_rest'

# blog
urlpatterns = [
    path('', views.home, name='home'),
    #path('main/game/notes', views.make_object_notes, name='mk_notes'),
]
