from django.urls import path
from . import views

urlpatterns = [
    path('<str:id>/', views.comments_list),
    path('', views.comments_post),
    path('update/<int:pk>/', views.comments_update)
]