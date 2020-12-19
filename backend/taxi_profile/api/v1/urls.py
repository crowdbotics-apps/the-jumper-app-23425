from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    DriverProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
    UserProfileViewSet,
)

router = DefaultRouter()
router.register("driverprofile", DriverProfileViewSet)
router.register("document", DocumentViewSet)
router.register("invitecode", InviteCodeViewSet)
router.register("notification", NotificationViewSet)
router.register("userprofile", UserProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
