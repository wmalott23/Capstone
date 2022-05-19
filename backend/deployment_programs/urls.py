from django.urls import path
from . import views

urlpatters = [
    path('', views.deployment_programs_list),
    path('<int:pk>/', views.deployment_programs_detail)
]