from os import name
from django.urls import path
from requests.api import request
from .views import HomePage
from .views import Movie_page,specific_movie_info
from . import views
# from .views import next_list_class

urlpatterns = [
    path('',HomePage.as_view(),name='homepage'),
    path('search',Movie_page.as_view(),name='Movie_page'),
    path('movie_info/<int:pk>',views.specific_movie_info,name='movie_info')
    # path('movie_info',specific_movie_info.as_view(),name='movie_info')
    # path('search',views.inc,name='search')
    # path('search_func',views.inc,name='search_func'),
    # path('search_func',views.inc,name='tet')
]