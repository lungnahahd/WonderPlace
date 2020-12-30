from django.db import models

# Create your models here.
class Wonder(models.Model):
    title = models.CharField(max_length=30)
    genre = models.CharField(max_length=15)
    year = models.CharField()

    def__str__(self):
        return self.title