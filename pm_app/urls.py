from pm_app import views
from django.urls import path

app_name = 'pm_app'

# blog
urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login, name='login')
]
