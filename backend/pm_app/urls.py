from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from . import views
#


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('',views.index ),
    
]