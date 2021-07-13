from django.shortcuts import render
# import requests

# Create your views here.
#https://yts.mx/api/v2/list_movies.json?page=600&limit=50
#https://www.imdb.com/feature/genre/

from django.views.generic import TemplateView

class HomePage(TemplateView):
    # base_url = 'https://yts.mx/api/v2/list_movies.json?'
    # r = requests.get(base_url , params={'page':500,'limit':50})
    # print(r)
    # info = r.json()
    # # print(json.dumps(info,indent=4))
    # print(info['data']['movies'][0])
    template_name = 'home.html'

class Movie_page(TemplateView):
    template_name = 'movie_page.html'