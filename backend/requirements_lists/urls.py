from django.urls import path
from . import views

urlpatterns = [
    path('', views.requirement_lists_list),
    path('<int:pk>/', views.requirement_lists_detail)
]