from django.db import models
from services.models import Service


class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=15)
    service_type = models.ForeignKey(Service, on_delete=models.CASCADE)
    message = models.CharField(max_length=1000)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.service_type.title}"
