from django.shortcuts import render
from decouple import config
import requests
import random
# import requests

# Create your views here.
#https://yts.mx/api/v2/list_movies.json?page=600&limit=50
#https://www.imdb.com/feature/genre/

from django.views.generic import TemplateView


def poster(number):
    base_url_poster = 'https://image.tmdb.org/t/p/original'
    print(number)
    urls = f'https://api.themoviedb.org/4/discover/movie?api_key={config("tmdb_api")}&page={number}'
    res = requests.get(url=urls)
    data = res.json()
    poster_links = []
    for i in range(len(data['results'])):
        # poster_links[i]=data['results'][i]["poster_path"]
        poster_links.append(base_url_poster+data['results'][i]["poster_path"])
    return poster_links

class HomePage(TemplateView):
    number = random.randint(0,500)
    # base_url_poster = 'https://image.tmdb.org/t/p/original'
    # print(number)
    # urls = f'https://api.themoviedb.org/4/discover/movie?api_key={config("tmdb_api")}&page={number}'
    # res = requests.get(url=urls)
    # data = res.json()
    # poster_links = []
    # for i in range(len(data['results'])):
    #     # poster_links[i]=data['results'][i]["poster_path"]
    #     poster_links.append(base_url_poster+data['results'][i]["poster_path"])
    # print(poster_links)
    poster_links = poster(number)
    # print((data['results'][7]["poster_path"]))
    template_name = 'home.html'

    extra_context = {'links': poster_links}

class Movie_page(TemplateView):
    
    poster_linkss = poster(1)
    print(poster_linkss)
   
    template_name = 'movie_page.html'
    extra_context = {'links':poster_linkss}
    

class next_list_class(TemplateView):
    template_name = 'movie_page.html'
