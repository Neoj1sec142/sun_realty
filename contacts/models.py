from django.db import models
from datetime import datetime as dt

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=dt.now, blank=True)
    def __str__(self):
        return self.email
