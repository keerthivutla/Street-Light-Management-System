/*var x = document.getElementById("demo");
function getLocation() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
*/
/*$(document).ready(function () {
    // Simple map
   map = new GMaps({
        el: '#gmaps-simple',
        lat: 12.9716,
        lng: 77.5946,
        zoom: 5,
        zoomcontrol: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
    });

var m = map.addMarker({
        lat: 12.9716,
        lng: 77.5946,
        zoom: 5,
        title: 'Eiffel Tower',
    }); 
var x = document.getElementById("gmaps-simple");
function getLocation() {
    // document.getElementById("demo").innerHTML = 4;
    //var x = document.getElementById("gmaps-simple");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      output.innerHTML = '<p>Latitude is' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
      map.setCenter(latitude,longitude);
      map.addMarker({
        lat: latitude,
        lng: longitude
      });
  }

});
*/

/*
$(document).ready(function() {
    
    map = new GMaps({
        el: '#gmaps-simple',
        lat: 12.9716,
        lng: 77.5946,
        zoom: 5,
        zoomcontrol: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
    });
    function processGeolocationResult(position) {
             html5Lat = position.coords.latitude; //Get latitude
             html5Lon = position.coords.longitude; //Get longitude
             html5TimeStamp = position.timestamp; //Get timestamp
             html5Accuracy = position.coords.accuracy; //Get accuracy in meters
             map.setCenter(html5Lat,html5Lon);
             map.addMarker({
             lat: html5Lat,
            lng: html5Lon
            });
             output.innerHTML = '<p>Latitude is' + html5Lat + '° <br>Longitude is ' + html5Lon + '°</p>';
             return (html5Lat).toFixed(8) + ", " + (html5Lon).toFixed(8);
       }

    function showPosition(){
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap, showError);
        } 
        else{
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }

    function showMap(position){
    // Get location data
    lat = position.coords.latitude;
    long = position.coords.longitude;
                 output.innerHTML = '<p>Latitude is' + lat + '° <br>Longitude is ' + long + '°</p>';
    var latlong = new google.maps.LatLng(lat, long);
    
    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({position:latlong, map:map, title:"You are here!"});
}
 
// Define callback function for failed attempt
function showError(error){
    if(error.code == 1){
        result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
    } else if(error.code == 2){
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if(error.code == 3){
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else{
        result.innerHTML = "Geolocation failed due to unknown error.";
    }
}
        
});
*/
// <script type="text/javascript">

// </script>

$(document).ready(function() {
    

   // var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        // window.location.href = "http://stackoverflow.com";
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +    "<br>Longitude: " + position.coords.longitude;
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // map.setCenter(latitude);
    // map.setCenter(longitude);
}

    map = new GMaps({
        el: '#gmaps-simple',
        lat: 37.3875, 
        lng: 122.0575,
        zoom: 15,
        zoomcontrol: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
    });

   GMaps.geocode({
  // address: $('#address').val();
  // window.alert(5+6);
  // address: $('form[name="frmSave"]');
  // address: $("#address").val();
  // address: germany,
  address: $("#address").val(),
  callback: function(results, status) {
    if (status == 'OK') {
      var latlng = results[0].geometry.location;
      map.setCenter(latlng.lat(), latlng.lng());
      map.addMarker({
        lat: latlng.lat(),
        lng: latlng.lng()
      });
    }
  }
});
    
});