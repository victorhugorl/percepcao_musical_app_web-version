from django.urls import path, include
from django.contrib import admin

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/',admin.site.urls),
    path('', include('pm_app.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

