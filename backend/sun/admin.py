from django.contrib import admin
from .models import User, Property, Client, Note
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    model = User
admin.site.register(User, UserAdmin)
admin.site.register(Property)
admin.site.register(Client)
admin.site.register(Note)
