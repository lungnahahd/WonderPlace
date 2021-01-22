
# viewsets : 자주 사용하는 공통적인 view 로직을 그룹화 한 것
from django.shortcuts import render
from rest_framework import viewsets
from .models import Wonder
from rest_framework.decorators import api_view
from rest_framework.response import Response
# 아래는 연습용 추가 import
import urllib.request
import urllib.parse
#from bs4 import BeautifulSoup
from django.http import HttpResponse
import requests
#추가
import simplejson
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template.defaulttags import register



def search_keyword(request):

    if request.method == "GET":
        return 
    elif request.method == "POST":
        query = request.POST.get('query')  # 검색어
        url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(
            query)
        headers = {
            "Authorization": "KakaoAK 13f796a480ad63c4e169282f09c34c7f"
        }
        place = requests.get(url, headers=headers).json()['documents']
        return HttpResponse(place)
#localhost:3000/KaKao/Front/category or localhost:8000/Kakao/Front/category
@method_decorator(csrf_exempt,name='dispatch')
def search_category(request):
    if request.method == "GET":
        return render(request, 'main/a.html')
    elif request.method == "POST":
          print("통신확인용 Print")
          req = json.loads(request.body.decode('utf-8'))
          x = req['x']['x']
          print(x)
          y = req['y']['y']
          radius = req['radius']['radius']  # 지름
          category = req['category']['category']  # 카테고리

          url = f'https://dapi.kakao.com/v2/local/search/category.json?category_group_code={category}&x={x}&y={y}&radius={radius}'
          #url ='https://dapi.kakao.com/v2/local/search/category.json?category={}'.format(category)
          headers = {
               "Authorization": "KakaoAK 13f796a480ad63c4e169282f09c34c7f"
          }
          place = requests.get(url, headers=headers).json()
          return HttpResponse(simplejson.dumps({"place":place}))
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)


#localhost:3000/KaKao/Front/friendlist or localhost:8000/Kakao/Front/friendlist
@method_decorator(csrf_exempt,name='dispatch')
def friend_list(request):
    print("친구 목록을 사이트에 보여드릴게요^^")
    url = "https://kapi.kakao.com/v1/api/talk/friends?limit=3"
    headers={
        "Authorization": "Bearer 57tRi4j0h7wxObT9HfUk7D5UfdhmtD7ued9OQAo9cusAAAF3H66q7A"
    }
    friend = requests.get(url,headers=headers).json()['documents']
    return HttpResponse(friend)
