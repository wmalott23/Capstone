from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>', views.comments_list),
    path('', views.comments_post),
    path('update/<int:pk>/', views.comments_update)
]