from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view

from random import randrange

from .models import Product, Stock, Tag
from django.db.models import Q
from .serializers import ProductImageSerializer, ProductSerializer, StockSerializer


from .pagination import CustomPagination

import time

class ProductsView(APIView, CustomPagination):
    serializer_class = Product
    
    def get(self, request):
        products = Product.objects.all()

        if request.query_params.get('sort'):
            sort = request.query_params.get('sort')
            products = products.order_by(sort)

        if request.query_params.get('category'):
            category = request.query_params.get('category')
            print(category)
            products = products.filter(category=category)

        if request.query_params.get('slug'):
            slug = request.query_params.get('slug')
            product = Product.objects.get(slug=slug)
            tags = Tag.objects.filter(product=product)
            index = randrange(len(tags))
            print(tags)
            products = products.filter(product_tags__name=tags[index].name).exclude(slug=slug)
        
        if request.query_params.get('filterToPrice'):
            toPrice = request.query_params.get('filterToPrice')
            products = products.filter(price__lte=toPrice)

        if request.query_params.get('filterFromPrice'):
            fromPrice = request.query_params.get('filterFromPrice')
            products = products.filter(price__gte=fromPrice)

        if request.query_params.get('search'):
            search = request.query_params.get('search')
            products = products.filter(Q(name__icontains=search) | Q(description__icontains=search))

        results = self.paginate_queryset(products, request, view=self)

        serializer = ProductSerializer(results, many=True)
        
        time.sleep(3)

        return self.get_paginated_response(serializer.data)
    

class ProductView(APIView):
    
    def get(self, request):
        try: 
            product = Product.objects.get(slug=request.query_params.get('slug'))
            serializer = ProductSerializer(product)
            time.sleep(3)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)