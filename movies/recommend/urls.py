from django.urls import path
from .views import HomePage
from .views import Movie_page
from .views import next_list_class

urlpatterns = [
    path('',HomePage.as_view(),name='homepage'),
    path('search',Movie_page.as_view(),name='Movie_page'),
    path('next_list',next_list_class.as_view(),name='next_list_class')
]