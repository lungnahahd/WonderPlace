from django.urls import path
from . import views

urlpatterns=[
    #path('',views.search_keyword),
    path('',views.search_category),
]