from django.db import models

CATEGORY_CHOICES = (
    ('men', 'Men'),
    ('women', 'Women'),
    ('kids', 'Kids'),
)

SIZE_CHOICES = (
    ('xxs', 'xxs'),
    ('xs', 'xs'),
    ('s', 's'),
    ('m', 'm'),
    ('l', 'l'),
    ('xl', 'xl'),
    ('xxl', 'xxl'),
    ('xxxl', 'xxxl'),
)
TAG_CHOICES = (
    ('swimsuit', 'swimsuit'),
    ('oneshoulder', 'oneshoulder'),
    ('kimono', 'kimono'),
)

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=10)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ('date_added',)

    def __str__(self):
        return self.name

class Image(models.Model):
    product = models.ForeignKey(Product, related_name='product_images', on_delete=models.CASCADE, blank=True, null=True)
    image = models.ImageField(upload_to='products/') 

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def __str__(self):
        return f'{self.id} {self.product.name}'


class Stock(models.Model):
    product = models.ForeignKey(Product, related_name="product_stock", 
                                on_delete=models.CASCADE, blank=True, null=True)
    size = models.CharField(choices=SIZE_CHOICES, max_length=10)
    amount_in_stock = models.IntegerField()

    class Meta:
        verbose_name = ("Stock")
        verbose_name_plural = ("Stock")
        constraints = [
            models.UniqueConstraint(
                fields=['product', 'size'],
                name='unique_prod_size_combo'
            )
        ]

    def __str__(self):
        return f'x{self.amount_in_stock} {self.product.name} size: {self.size}'

class Tag(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_tags")
    name = models.CharField(choices=TAG_CHOICES, max_length=50)
    
    def __str__(self):
        return self.name