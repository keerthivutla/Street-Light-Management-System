from django.urls import path
from . import views
urlpatterns = [
	path('',views.index),
	path('gmaps/',views.maps),
	path('blank/',views.blank),
	path('error/',views.error), # Route the pages with the corresponding urls
	path('profile/',views.profile),
	path('table/',views.table),
	path('icons/',views.icons),
	path('view_on_maps/',views.view_on_maps,name = 'view_on_maps'),
	path('view_on_id/<int:pk>',views.view_on_id,name = 'view_on_id'),
	path('abc/',views.sensor_values),
]
