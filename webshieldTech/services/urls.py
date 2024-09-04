from django.urls import path
from .views import ServiceListView

urlpatterns = [
    path('list/', ServiceListView.as_view(), name='services-list'),
]
