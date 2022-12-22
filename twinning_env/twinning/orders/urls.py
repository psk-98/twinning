from django.urls import path

from orders import views

urlpatterns =  [
    path('orders/', views.OrderView.as_view()),
    # path('address/', views.AddressView.as_view()),
    path('payment/', views.test_payment_yoco),
    # path('payment/save-stripe-info/', views.save_stripe_info)
]