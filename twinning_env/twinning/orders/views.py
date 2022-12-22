from django.shortcuts import render
import requests, json, random, string

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from rest_framework.views import APIView

from .serializers import AddressSerializer, OrderSerializer

from .models import Order, OrderItem, Address, Payment
from products.models import Product, Stock
from django.contrib.auth.models import User


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


def yoco_payment(token, amount):
    response = requests.post(
        'https://online.yoco.com/v1/charges/',
        headers={
            'X-Auth-Secret-Key': 'sk_test_960bfde0VBrLlpK098e4ffeb53e1',
        },
        json={
            'token': token,
            'currency': 'ZAR',
            'amountInCents': amount,
        },
    )
    
    res_status = response.status_code
    if (res_status == 201):
        return {'res': response.json(), 'status': res_status}
    elif res_status == 400:
        return {'res': response.json(), 'status': res_status}
    elif (res_status == 500):
        return {'res': response.json(), 'status': res_status}
   
    

class OrderView(APIView):
    serializer_class = OrderSerializer
    
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        
        return Response(serializer.data) 
        
    def post(self, request):
        # shipping = request.data['customer_address']
        # email = shipping['email']
        # name = shipping['name']
        # s_address = shipping['address']
        # postal = shipping['postal']
        # city = shipping['city']
        # country = shipping['country']
        guest = False
        #payment_method_id = request.data['payment_method_id']
        total = 0
        
        if(len(User.objects.filter(id = request.user.id)) != 0):
            user = request.user
            if (Address.objects.get(user=user)):
                address = Address.objects.get(user=user)
            else:
                address = Address.objects.create(user=user)
        # else:
        #     guest = True
        #     address = Address.objects.create(email=email, guest=guest,
        #                                     name=name,
        #                                     address=s_address,
        #                                     postal=postal,
        #                                     city=city,
        #                                     country=country,
        #                                     default=True,
        #                                     address_type="S")
            
        # address.save()
        address = Address.objects.get(id = 1)
        order = Order.objects.create(ref_code=create_ref_code(),
                                        shipping_address=address,
                                        guest=guest)
        for item in request.data['order_items']:
            print(item["quantity"])
            quantity = item["quantity"]
            size = item["size"]
            product = item["item_id"]
            product = Product.objects.get(id=product)

            if(Stock.objects.get(product=product, size=size)):
                
                stock = Stock.objects.get(product=product, size=size)
                stock.amount_in_stock -= quantity
                stock.save()
                orderItem = OrderItem.objects.create(item=product, order=order,
                                                    quantity=quantity, size=size)
                orderItem.save()
                total += orderItem.get_final_price()
        
        res = yoco_payment(request.data['charge_token'], request.data['amount'])
        
        res_status = res['status']
        pay_res = res['res']
        if res_status == 201:
            payment = Payment.objects.create(charge_id=pay_res['id'], amount=(pay_res['amountInCents']/100), method="Yoco", order=order)
            if(len(User.objects.filter(id = request.user.id)) != 0 ):
                payment.save(user=request.user)
                
            else:
                payment.save()
                
            order.save()
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        elif res_status == 400:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=pay_res)
        elif (res_status == 500):
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=pay_res)

        # return {'res': response.json(), 'status': res_status}
            
        
        #order.save()
        
        

@api_view(["POST"])
def test_payment_yoco(request):
    token =  request.query_params.get('chargeToken')
    response = requests.post(
    'https://online.yoco.com/v1/charges/',
    headers={
        'X-Auth-Secret-Key': 'sk_test_960bfde0VBrLlpK098e4ffeb53e1',
    },
    json={
        'token': 'tok_J8R0pU4Y2LDmrRFOArfQRnhLKv',
        'amountInCents': 2799,
        'currency': 'ZAR',
    },
    )
    res_status = int(response.status_code)
    
    response = response.json()
    #print(response["object"])
    if res_status == 201:
        print("success")
        amountIn = response['amountInCents'] / 100
      #  payment = Payment.objects.create(charge_id=response.id, amount=response.amountInCents, method="Yoco")
        payment = Payment.objects.create(charge_id=response['id'], amount=amountIn, method="Yoco")
        if(len(User.objects.filter(id = request.user.id)) != 0 ):
            payment.save(user=request.user)
        else:
            payment.save()
    elif res_status == 400:
        print("delinced")
    elif (res_status == 500):
        print("server error")
    
    # print(response.content)
    # content = response.content
    
    # payment = Payment.objects.create(charge_id=response.id, amount=response.amountInCents, method="Yoco")
    # if(len(User.objects.filter(id = request.user.id)) != 0 ):
    #      payment.save(user=request.user)
    # else:
    #      payment.save()
    
    return Response(status=status.HTTP_200_OK, data=response)
