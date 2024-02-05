from pm_app import views
from django.urls import path, re_path

app_name = 'pm_app'

# urls
urlpatterns = [
    path('register/', views.register, name='register'),
    path('', views.index, name='index'),
    re_path(r'^(?:.*)/?$', views.index), # caminho para dar match nas urls react
    #path('login/', views.login, name='login'),
    #path('main/', views.main, name='main'),
    #path('main/game/', views.game, name='game'),

]
