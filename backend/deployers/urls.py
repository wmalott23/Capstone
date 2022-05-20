from django.urls import path
from . import views

urlpatterns = [
    path('', views.deployers_list),
    path('reg/', views.deployers_reg),
    path('<int:pk>/', views.deployers_detail)
]