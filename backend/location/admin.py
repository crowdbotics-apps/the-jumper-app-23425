from django.contrib import admin
from .models import MapLocation, ProfileLocation, VehicleLocation

admin.site.register(VehicleLocation)
admin.site.register(MapLocation)
admin.site.register(ProfileLocation)

# Register your models here.
