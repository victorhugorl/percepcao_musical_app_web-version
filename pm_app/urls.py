from django.urls import path
from pm_app import views

app_name = 'pm_app'

urlpatterns = [
    path('', views.index, name='home'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('user/<str:name_user>/', views.user_view, name='profile'),
    path('main/', views.main, name='main'),
    path('main/game/', views.game, name='game'),
    # path('main/game/notes', views.make_object_notes, name='mk_notes'),
]
