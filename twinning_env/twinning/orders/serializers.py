from rest_framework import serializers

from .models import Address, Order, OrderItem, Payment

from accounts.serializers import UserSerializer
from products.serializers import ProductSerializer

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        depth=2
        fields = [
            'amount',
            'user',
            'currency',
            'order_ref',
        ]

class OrderItemSerializer(serializers.ModelSerializer):
    
    item = ProductSerializer()

    class Meta:
        model = OrderItem
        depth = 2
        fields = [
            'id',
            'quantity',
            'item',
            'size'
        ]

class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    
    order_items = OrderItemSerializer(many=True)
    user = UserSerializer()
    invoice = PaymentSerializer()

    class Meta:
        model = Order
        depth = 1
        fields = [
            "user",
            "order_items",
            'invoice'
        ]