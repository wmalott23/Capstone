from django.urls import path
from . import views

urlpatterns = [
    path('', views.steps_list),
    path('post/', views.steps_post),
    path('<int:pk>/', views.steps_update)
]