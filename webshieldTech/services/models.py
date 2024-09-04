from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=100, unique=True)
    summary = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='services/', blank=True, null=True)

    def __str__(self):
        return self.title
