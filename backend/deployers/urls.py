from django.urls import path
from . import views

urlpatters = [
    path('', views.deployers_list),
    path('<int:pk>/', views.deployers_detail)
]