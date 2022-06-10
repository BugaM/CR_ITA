from django.urls import path
from . import views

urlpatterns = [
    path('', views.randomData, name='randomData')
]