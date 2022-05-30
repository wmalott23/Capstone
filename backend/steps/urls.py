from django.urls import path
from . import views

urlpatterns = [
    path('', views.steps_list),
    path('post/', views.steps_post),
    path('<int:pk>/', views.steps_update),
    path('req/<int:id>/', views.steps__list),
    path('del/<int:pk>/', views.step_delete)
]