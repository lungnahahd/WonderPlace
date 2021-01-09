from django.db import models

# Create your models here.
class Wonder(models.Model):
    id = models.AutoField(primary_key=True)
    store_name = models.CharField(max_length=100,verbose_name="식당 이름", null=True)
    store_place = models.CharField(max_length=100,verbose_name="식당 위치" ,null=True)

    def __str__(self):
        return self.store_name