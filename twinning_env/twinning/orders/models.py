from django.db import models
from django.conf import settings

from products.models import Product, SIZE_CHOICES

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Shipping'),
)

COUNTRY_CHOICES = (
                ('ZA', 'South Africa'),
)

PAYMENT_CHOICES = (
    ('Yoco', 'Yoco'),
)

class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='addresses',
                             on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)                             
    address = models.CharField(max_length=100)
    postal = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100, default='ZA', choices=COUNTRY_CHOICES)
    guest = models.BooleanField(default=False)                 
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)
    default = models.BooleanField(default=True)

    def __str__(self):
        return self.email

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='my_orders', 
                                on_delete=models.CASCADE, blank=True, null=True)
    ref_code = models.CharField(max_length=20, blank=True, null=True)
    shipping_address = models.ForeignKey('Address', related_name='shipping_address', on_delete=models.SET_NULL
                                         , blank=True, null=True   )
    date_added = models.DateTimeField(auto_now_add=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    guest = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)
    
    def __str__(self): 
        return self.ref_code

    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        if self.coupon:
            total -= self.coupon.amount
        return total  

    

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='order_items', on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    size = models.CharField(choices=SIZE_CHOICES, max_length=20, blank=True, null=True)

    def __str__(self):
        return f"{self.quantity} of {self.item.name}"

    def __str__(self):
        return f"{self.quantity} of {self.item.name}"

    def get_total_item_price(self):
        return self.quantity * self.item.price

    def get_total_discount_item_price(self):
        return self.quantity * self.item.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()

    def get_final_price(self):
        if self.item.discount_price:
            return self.get_total_discount_item_price()
        return self.get_total_item_price()
    
    

class Payment(models.Model):
    charge_id = models.CharField(max_length=50)
    method = models.CharField(choices=PAYMENT_CHOICES, max_length=30)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.SET_NULL, blank=True, null=True)
    amount = models.FloatField()
    currency = models.CharField(max_length=50, default='ZAR')
    timestamp = models.DateTimeField(auto_now_add=True)
    order_ref = models.ForeignKey(Order, on_delete=models.SET_NULL, related_name='invoice', blank=True, null=True)

    def __str__(self):
        return self.charge_id