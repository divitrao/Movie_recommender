from json import dumps
from os import terminal_size
from django.shortcuts import render
from decouple import config
#pip install decouple 
import requests
import random
# import requests

# Create your views here.
#https://yts.mx/api/v2/list_movies.json?page=600&limit=50
#https://www.imdb.com/feature/genre/

from django.views.generic import TemplateView
#https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=devdas_trailerr&key=AIzaSyAPVtYyhX9NRJwEqoXAnslhsQRZUXI5nUU


def poster(number,page_2 = False):
    base_url_poster = 'https://image.tmdb.org/t/p/original'
    # print(number)
    urls = f'https://api.themoviedb.org/4/discover/movie?api_key={config("tmdb_api")}&page={number}'
    res = requests.get(url=urls)
    data = res.json()
    json_data = dumps(data)
    poster_links = []

    if page_2:
        for i in range(0,len(data['results']),2):
            blank_link = []
            blank_link.append(base_url_poster+data['results'][i]["poster_path"])
            blank_link.append(base_url_poster+data['results'][i+1]["poster_path"])
            # print('hello',i)
            # print('hi',i+1)
            poster_links.append(blank_link)
    
    else:
        for i in range(len(data['results'])):
            
            poster_links.append(base_url_poster+data['results'][i]["poster_path"])
    return poster_links, json_data

class HomePage(TemplateView):

    number = random.randint(0,500)
    poster_links,json_data = poster(number)
    template_name = 'home.html'
    extra_context = {'links': poster_links}

class Movie_page(TemplateView):
    print('hi')
    
    poster_linkss,json_data  = poster(1,page_2 = True)
    # pages+=1
    template_name = 'movie_page.html'
    # print('these are ',pages)
    extra_context = {'links':poster_linkss,'data':json_data}
    

# class next_list_class(TemplateView):
#     template_name = 'movie_page.html'

# def inc(request):
   
#     page = request.POST.get('page',None)
#     print('page is ',page)
    
#     # poster_linkss = poster(pagess,page_2 = True)
#     poster_linksss ,json_data = poster(page,page_2 = True)
#     print(poster_linksss)
#     print('hemlo')
#     print(json_data)
#     return render(request,'movie_page.html',{'links':poster_linksss,'data':json_data})

