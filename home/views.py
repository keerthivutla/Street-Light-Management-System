from django.shortcuts import render
from .models import Complaint,Lights
from django.shortcuts import render_to_response
from django.template import RequestContext
import time
import threading
from urllib.parse import urlparse,parse_qs
import requests

from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
@csrf_exempt
# @ensure_csrf_cookie

def sensor_values(request,sensor_val=10,dev_id='id_1'): #Fucntion to automatically register a complaint based on the sensor values
    value = int(request.POST.get('sensor_value'))
    dev_id = request.POST.get('dev_id')
    light = Lights.objects.get(Light_Id = dev_id) # Get the device id to know from which device the values came from

    print(value)
    print(dev_id)
    if(value < 420): #Regsiter a complaint if value is less than a threshold
        num_results = light.complaint_set.all().count()
        if(num_results == 0): #checking for duplicates in the complaint of the device
            complaint = Complaint()
            complaint.Lt_Id = light
            complaint.reason = "Light is not working properly sometimes"
            complaint.Location = light.Location
            complaint.save() # store it in the database

    else:
        num_results = light.complaint_set.all().count()
        if(num_results != 0): #Delete the complaint if the light is working
            light.complaint_set.all().delete()

        return render(request, 'html/pages-blank.html', context = None)

def index(request):
	return render(request, 'html/index.html', context = None)
def maps(request):
	return render(request, 'html/map-google.html',context = None)
def blank(request):
	return render(request, 'html/pages-blank.html',context = None)
def error(request):
	return render(request, 'html/pages-error-404.html',context = None)

def view_on_id(request,pk): #Function that returns a particular light Location from the complained lights
	complaint = Complaint.objects.get(pk = pk)
	all_comp = Complaint.objects.all()
	return render(request,"html/table-basic_2.html", {'data': all_comp, 'light_loc' : complaint})

def view_on_maps(request): #Function that returns all the lighs that have compalints
	loc = request.GET.get('Location')
	complaint = Complaint.objects.get(Location = loc)
	all_comp = Complaint.objects.all()
	return render(request,"html/table-basic.html", {'data': all_comp, 'light_loc' : complaint})

def profile(request): #Function to register a compalint based on user information about the light
	if request.method == "POST":
		complaint = Complaint()
		complaint.Phone_Number = (request.POST['Phone_Number'])
		complaint.reason = (request.POST['reason'])
		complaint.Location = (request.POST['Location'])
		complaint.save()
		return render(request, 'html/pages-blank.html',context = None)
	return render(request, 'html/pages-profile.html', context = None)

def table(request): #Function that returns all the Complained lights
	all_comp = Complaint.objects.all()
	return render(request, 'html/table-basic.html',{'data': all_comp})
def icons(request):
	return render(request, 'html/icon-fontawesome.html',context = None)
