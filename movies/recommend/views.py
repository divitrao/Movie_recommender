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
#https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=devdas_trailerr&key=pppppppp


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
            blank_link.extend([i,i+1])
            blank_link.append(base_url_poster+data['results'][i+1]["poster_path"])
            blank_link.append(data['results'][i]["original_title"])
            blank_link.append(data['results'][i+1]["original_title"])
            blank_link.append('fig_caption' + str(i))
            blank_link.append('fig_caption' + str(i+1))
            blank_link.append('IMDB : '+ str(data['results'][i]["vote_average"]))
            blank_link.append('IMDB : '+ str(data['results'][i+1]["vote_average"]))
            blank_link.append(data['results'][i]["id"])
            blank_link.append(data['results'][i+1]["id"])
            
            
          
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
   
    
    poster_linkss,json_data = poster(1,page_2 = True)
    # pages+=1
    template_name = 'movie_page.html'
    
    # print(poster_linkss)
    extra_context = {'links':poster_linkss,'data':json_data}

def specific_movie_info(request,pk):
    base_url_poster = 'https://image.tmdb.org/t/p/original'
    urls = f'https://api.themoviedb.org/3/movie/{pk}?language=en-US&api_key={config("tmdb_api")}'
    res = requests.get(urls)
    data = (res.json())
    # print('olalalla',data['backdrop_path'])
    #
    if data['backdrop_path'] == None:
        back_drop = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
    else:
        back_drop = base_url_poster+data['backdrop_path']
    if data['poster_path'] == None:
        poster = 'https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    else:
        poster = base_url_poster + data['poster_path']
    title = data['title']
    overiew = data['overview']
    search_query =data['title'] + ' trailer'
    youtube_link = f'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q={search_query}&key={config("youtube_api")}'
    res_youtube_id = requests.get(youtube_link)
    youtube_data = res_youtube_id.json()
    link = 'https://www.youtube.com/embed/'+ youtube_data['items'][0]['id']['videoId']
    print(link)
    return render(request,'movies_info.html',{'back_drop':back_drop,'poster':poster,'title':title,'overview':overiew,'link':link})
    
    
    



