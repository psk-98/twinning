from django.urls import path

from .views import ProductsView, ProductView

urlpatterns = [
    path('products/', ProductsView.as_view()),
    path('product/', ProductView.as_view()),
    
]