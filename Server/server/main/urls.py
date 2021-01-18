
# 앱 내에 생성된 url.py
from django.urls import path
from . import views

urlpatterns = [
    # path('',views.search_keyword),
    path('Front/category', views.search_category,name="Front/category"),
]
