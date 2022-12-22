from rest_framework import serializers

from .models import Product, Stock, Image, Tag

class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = [
            'get_image',
        ]

class StockSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Stock
        fields = [
            'size',
            'amount_in_stock'
        ]
                


class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True)
    product_stock = StockSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'category',
            'name',
            'slug',
            'description',
            'price',
            'discount_price',
            'product_images',
            'product_stock',
        ]
        extra_kwargs = {'images': {'write_only': True}}

