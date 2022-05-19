from django.urls import path
from . import views

urlpatterns = [
    path('', views.cbts_list),
    path('<int:pk>/', views.cbts_detail)
]