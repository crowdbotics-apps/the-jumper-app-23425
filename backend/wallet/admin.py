from django.contrib import admin
from .models import DriverWallet, PaymentMethod, UserWallet

admin.site.register(DriverWallet)
admin.site.register(UserWallet)
admin.site.register(PaymentMethod)

# Register your models here.
