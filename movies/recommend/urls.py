from os import name
from django.urls import path
from requests.api import request
from .views import HomePage
from .views import Movie_page
from . import views
# from .views import next_list_class

urlpatterns = [
    path('',HomePage.as_view(),name='homepage'),
    path('search',Movie_page.as_view(),name='Movie_page'),
    # path('search',views.inc,name='search')
    # path('search_func',views.inc,name='search_func'),
    # path('search_func',views.inc,name='tet')
]