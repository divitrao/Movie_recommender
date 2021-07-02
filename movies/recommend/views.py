from django.shortcuts import render

# Create your views here.
#https://yts.mx/api/v2/list_movies.json?page=600&limit=50
#https://www.imdb.com/feature/genre/

from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'home.html'