from django.urls import path
from . import views

urlpatterns = [
    path('random', views.randomData, name='randomData'),
    path('test', views.get_cr, name='cr')
]