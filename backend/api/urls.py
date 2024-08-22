from django.urls import path
from api import views
# utilizando a views para a api e criando urls

urlpatterns = [
    path('hello/', views.hello_world),
]
