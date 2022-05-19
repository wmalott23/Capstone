from django.urls import path
from . import views

urlpatterns = [
    path('', views.requirements_list),
    path('<int:pk>/', views.requirements_detail)
]