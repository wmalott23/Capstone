from django.urls import path
from . import views

urlpatters = [
    path('', views.requirement_lists_list),
    path('<int:pk>/', views.requirement_lists_detail)
]