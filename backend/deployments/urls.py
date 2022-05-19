from django.urls import path
from . import views

urlpatters = [
    path('', views.deployments_list),
    path('<int:pk>/', views.deployments_detail)
]