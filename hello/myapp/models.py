from django.db import models

# Create your models here.
class MySignin(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

class MyItem(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    makedate = models.DateField()
    url = models.URLField()
    