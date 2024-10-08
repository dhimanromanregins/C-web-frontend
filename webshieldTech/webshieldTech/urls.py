from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contacts/', include('contacts.urls')),
    path('api/services/', include('services.urls')),
]
