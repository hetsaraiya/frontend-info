from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('bloghome/', views.bloghome, name="bloghome"),
    path('<str:slug>', views.blogPost, name="blogPost"),
    
]
