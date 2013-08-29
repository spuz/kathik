var map = L.mapbox.map('map', 'spuz78.map-6wl7vp86');

map.scrollWheelZoom.disable();
map.touchZoom.disable();
map.dragging.disable();

var geoJson = [{
  type: 'Feature',
  "geometry": { "type": "Point", "coordinates": [16.3671079,48.2596096]},
  "properties": {
    
    "marker-symbol": "star",
    "marker-size": "small",
    "marker-color": "#F00",
    "address": "<strong>Ordination</strong><br/>Heiligenstädter Straße 195,<br/> 1190 Wien"
  }
}];

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);

// Cycle through markers once geoJson is ready.
// Add custom popups to each using our custom feature properties
map.markerLayer.on('ready', function(e) {
  this.eachLayer(function(marker) {

    var feature = marker.feature;

    // Create custom popup content
    var popupContent =  '<p>' + feature.properties.address + '</p>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
      closeButton: false,
      minWidth: 150
    });

  });
});

map.setView([48.2596096, 16.3671079], 16);

$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
  e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
  var target = $(this).attr("href"); //Get the target
      
  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  $('html, body').stop().animate({ scrollTop: $(target).offset().top() }, 400, function() {
    location.hash = target;  //attach the hash (#jumptarget) to the pageurl
  });
      
  return false;
   });
});




