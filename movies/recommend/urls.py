from django.urls import path
from .views import HomePage
from .views import Movie_page

urlpatterns = [
    path('',HomePage.as_view(),name='homepage'),
    path('search',Movie_page.as_view(),name='Movie_page')
]