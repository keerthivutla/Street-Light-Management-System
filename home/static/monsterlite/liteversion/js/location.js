function myFunction()
{
  var addr = document.getElementById('Location').value;
  map = new GMaps({ //Default location on google maps is Football Ground
        el: '#gmaps-simple4',
        lat: 12.845162,   //Location of iiitb football ground
        lng: 77.663898,
        zoom: 19,
        zoomcontrol: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,

    click: function(event) //Function to calculate the address when you click on the map
        {
          latitude = event.latLng.lat();
          longitude = event.latLng.lng();
          var latlng = new google.maps.LatLng(latitude, longitude);
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ 'location': latlng }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                      if (results[0]) {
                        map.setCenter(latitude, longitude);//Set center to the newly clicked position
                        var location = results[0].formatted_address;
                        document.getElementById('Location').value=location;
                        document.getElementById('Lat').value=latitude;
                        document.getElementById('Long').value=longitude;
                      }
                  }
                  else{
                    alert('Geocode was not successful for the following reason: ' + status);
                  }
              });

    },

  });

     GMaps.geocode({
  address: addr,  // Function to calculate latitude and longitude based on the address
  callback: function(results, status) {
    if (status == 'OK') {
      var latlng = results[0].geometry.location;
      map.setCenter(latlng.lat(), latlng.lng());
      map.addMarker({ //Add a marker at the center
        lat: latlng.lat(),
        lng: latlng.lng(),
        size: [20,20]
      });
    }
  }

});

     map.addMarker({
          lat: 12.845162,    //Adding a marker at iiitb football ground
          lng: 77.663898,
          title: 'Football Ground', //adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900'
        });

    map.addMarker({
          lat: 12.844565,    //Adding a marker at iiitb innovation center
          lng: 77.662506,
          title: 'Innovation Center', //adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0000ff'
        });

    map.addMarker({
          lat: 12.844202,    //Adding marker at the IIITB womens hostel
          lng: 77.662901,
          title: 'IIITB womens Hostel',//adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0000ff'
        });

    map.addMarker({
          lat: 12.845363,    //Adding marker at the IIITB Gate2
          lng: 77.66256,
          title: 'IIITB Gate2',//adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900'
        });

}

$(document).ready(function()
{
    // var latitude = 12.8448;  // iiitb
    // var longitude = 77.6632;
    var latitude = 12.845162;  //Map is initially centered at iiitb Football Ground
    var longitude = 77.663898;
    map = new GMaps({
        el: '#gmaps-simple4',
        lat: latitude,
        lng: longitude,
        zoom: 19,
        zoomcontrol: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,

        click: function(event) //To get the location if we click on the map
        {
          latitude = event.latLng.lat();
          longitude = event.latLng.lng();
          console.log(latitude);
          console.log(longitude);
          var latlng = new google.maps.LatLng(latitude, longitude);
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ 'location': latlng }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                      if (results[0]) {
                        map.setCenter(latitude, longitude); // Setting the center on the map
                        var location = results[0].formatted_address;
                        document.getElementById('Location').value=location;
                        document.getElementById('Lat').value=latitude;
                        document.getElementById('Long').value=longitude;
                      }
                  }
                  else{
                    alert('Geocode was not successful for the following reason: ' + status);
                  }
              });

    },


  });

    map.addMarker({
          lat: 12.845162,    //Location of iiitb football ground
          lng: 77.663898,
          title: 'Football Ground', // Adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900'
        });

    map.addMarker({
          lat: 12.844565,    //Location of IIITb innovation center
          lng: 77.662506,
          title: 'Innovation Center', // Adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0000ff'
        });

    map.addMarker({
          lat: 12.844202,    //Location of IIITB womens hostel
          lng: 77.662901,
          title: 'IIITB womens Hostel',// Adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0000ff'
        });

    map.addMarker({
          lat: 12.845363,    //Location of IIITb Gate2
          lng: 77.66256,
          title: 'IIITB Gate2',// Adding title and icons at the location
          icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900'
        });

});
