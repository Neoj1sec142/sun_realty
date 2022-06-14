from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Region(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.TextField()
    def __str__(self):
        return self.name

# class Property(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField()
#     asking_pr = models.SmallIntegerField()
#     water_dam = models.BooleanField()
#     dam_note = models.TextField()
#     est_value = models.SmallIntegerField()
#     location = models.TextField()
#     def __str__(self):
#         return self.name
#     class Meta:
#         ordering = ['-id']

# class Client(models.Model):
#     name = models.CharField(max_length=255)
#     buyer = models.BooleanField()
#     seller = models.BooleanField()
#     host = models
#     property = models.ForeignKey(Property, on_delete=models.CASCADE)
#     def __str__(self):
#         return self.name

class User(AbstractUser):
    # clients = models.ManyToManyField(Client, through='Property')
    # property_id = models.ManyToManyField(Property, on_delete=models.CASCADE)
    def __str__(self):
        return self.username

class Note(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    note = models.TextField()
    note_type = models.CharField(max_length=255)
    def __str__(self):
        return self.title