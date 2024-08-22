from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# utilizando a views para a api e criando urls
from rest_framework import routers
from . import view_sets 


route = routers.DefaultRouter()


route.register(r'note', view_sets.NoteViewSet,)
route.register(r'user',view_sets.UserViewSet,)



urlpatterns = [
    path('', include(route.urls)),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view())
    
    ]
