from sun import serializers
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [

    # JavaScript Web Tokens
    path('token/obtain/',  jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),    name='token-refresh'),
    path('blacklist/',     views.UserLogout.as_view(),              name='token-blacklist'),

    # path("token/", TokenObtainPairView.as_view(), name="obtain_token"),
    # path("token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),

    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/create', views.UserCreate.as_view(), name='user_create'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username'),
    path('users/alldetails/', views.UserAllDetailsList.as_view(), name='useralldetails_list'),
    path('users/alldetails/<int:pk>', views.UserAllDetailsDetail.as_view(), name='useralldetails_detail'),

    path('properties/', views.PostList.as_view(), name='post_list'),
    path('properties/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
    path('clients/', views.LanguageList.as_view(), name='language_list'),
    path('clients/<int:pk>', views.LanguageDetail.as_view(), name='language_detail'),
    path('notes/', views.LanguageList.as_view(), name='language_list'),
    path('notes/<int:pk>', views.LanguageDetail.as_view(), name='language_detail'),
]