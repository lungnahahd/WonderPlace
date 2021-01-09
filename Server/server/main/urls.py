# 앱 내에 생성된 url.py
from django.urls import path
from . import views

urlpatterns=[
    path('',views.store_list),
]