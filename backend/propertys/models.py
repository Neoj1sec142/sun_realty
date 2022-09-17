from django.db import models
from users.models import User
# Create your models here.
class Property(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='staff_propertys', blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    water_damage = models.BooleanField(default=False, null=True, blank=True)
    owner_name = models.CharField(max_length=100, null=True, blank=True)
    # img = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title

    