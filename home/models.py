# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.urls import reverse
# Create your models here.

class Lights(models.Model):
    Light_Id = models.CharField(max_length = 30)
    Location = models.TextField(blank= False, null = True)

    def __str__(self):
        return str(self.Light_Id) + str(self.Location)

class Complaint(models.Model):
    Location =  models.TextField(blank = False,null = True)
    Phone_Number = models.BigIntegerField(null = True)
    reason = models.TextField(blank = False,null = True)
    Lt_Id = models.ForeignKey('Lights',null=True,on_delete =models.CASCADE)

    def publish(self):
        # self.published_date = timezone.now()
        self.save()

    def get_absolute_url(self):
        return reverse('view_on_id',args=[str(self.id)])

    def __str__(self):
        return str(self.Location)
