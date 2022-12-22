from django.contrib import admin
from .models import Product, Stock, Image, Tag
from django import forms

class ProductForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)

    class Meta:
        model = Product
        exclude = ('',)

class TagsInline(admin.TabularInline):
    model = Tag
    
class ImagesInline(admin.TabularInline):
    model = Image

class StockInline(admin.TabularInline):
    model = Stock

class ProductFormAdmin(admin.ModelAdmin):
    form = ProductForm
    inlines = [ImagesInline, StockInline, TagsInline]
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(Product, ProductFormAdmin)
#admin.site.register(Image, ImageAdmin)