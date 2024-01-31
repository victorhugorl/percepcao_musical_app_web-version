from pm_app import views
from django.urls import path

app_name = 'pm_app'

# blog
urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('main/', views.main, name='main'),
    path('main/game/', views.game, name='game'),
    path('main/game/notes', views.make_object_notes, name='mk_notes'),
]
