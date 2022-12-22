# Generated by Django 4.1.3 on 2022-12-11 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_product_category_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_tags', to='products.product'),
        ),
    ]