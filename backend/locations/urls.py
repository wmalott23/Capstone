from django.urls import path
from . import views

urlpatterns = [
    path('', views.locations_list),
    path('<int:pk>/', views.locations_detail)
]