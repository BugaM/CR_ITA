from django.urls import path
from . import views

urlpatterns = [
    path('', views.randomData, name='randomData'),
    path('test', views.get_cr, name='cr')
]