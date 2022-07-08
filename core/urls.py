from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from core.views import DataViewSet

router = DefaultRouter()
router.register(r'data', views.DataViewSet, basename='data')

urlpatterns = router.urls