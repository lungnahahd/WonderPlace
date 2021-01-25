
# 앱 내에 생성된 url.py
from django.urls import path
from . import views

urlpatterns = [
    #path('',views.search_keyword),
    path('Front/category', views.search_category,name="Front/category"),
    path('Front/friendlist',views.friend_list,name="Front/friendlist"),
    path('Front/sendme',views.send_me,name="Front/sendme"),
    path('Front/sendfriend',views.send_friend,name="Front/sendfriend"),
]
