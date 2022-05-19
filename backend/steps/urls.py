from django.urls import path
from . import views

urlpatterns = [
    path('', views.steps_list),
    path('<int:pk>/', views.steps_detail)
]