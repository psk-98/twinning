# Generated by Django 4.1.3 on 2022-12-21 17:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_remove_order_payment_payment_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='payment',
            old_name='order',
            new_name='order_ref',
        ),
    ]
