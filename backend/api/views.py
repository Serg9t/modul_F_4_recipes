from operator import ge
from django.shortcuts import render
from rest_framework import generics, viewsets

from . models import Category, Dishes
from . serializers import CategorySerializer, DishesSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DishesViewSet(viewsets.ModelViewSet):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer


class DishesCategory(generics.ListAPIView):
    serializer_class = DishesSerializer

    def get_queryset(self):
        category_id = self.kwargs['pk']
        return Dishes.objects.filter(category_id=category_id)

