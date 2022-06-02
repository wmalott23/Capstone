from django.urls import path
from . import views

urlpatterns = [
    path('notes/<str:id>/', views.comments_list),
    path('notes/', views.comments_post),
    path('notes/update/<int:pk>/', views.comments_update)
]