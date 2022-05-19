from django.urls import path
from . import views

urlpatterns = [
    path('', views.deployers_list),
    path('<int:pk>/', views.deployers_detail)
]