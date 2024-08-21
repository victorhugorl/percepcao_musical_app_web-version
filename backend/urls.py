from django.contrib import admin
from django.urls import path, include

# url principal para requisições

urlpatterns = [
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]
