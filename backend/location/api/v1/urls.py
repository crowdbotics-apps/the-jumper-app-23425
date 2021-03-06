from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MapLocationViewSet, ProfileLocationViewSet, VehicleLocationViewSet

router = DefaultRouter()
router.register("vehiclelocation", VehicleLocationViewSet)
router.register("maplocation", MapLocationViewSet)
router.register("profilelocation", ProfileLocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
