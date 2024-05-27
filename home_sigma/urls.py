"""
URL configuration for home_sigma project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import PropertyView, PropertyDetailView, RentPropertyList, SellPropertyList, HeaderView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('header/', HeaderView.as_view(), name="header"),
    path('property/', PropertyView.as_view(), name="property-list"),
    path('property/<int:pk>/', PropertyDetailView.as_view(), name="property-detail"),
    path('properties/rent/', RentPropertyList.as_view(), name='rent-properties'),
    path('properties/sell/', SellPropertyList.as_view(), name='sell-properties'),
]
