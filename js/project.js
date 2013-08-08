var map = L.mapbox.map('map', 'spuz78.map-6wl7vp86');

map.scrollWheelZoom.disable();
map.touchZoom.disable();
map.dragging.disable();

var geoJson = [{
  type: 'Feature',
  "geometry": { "type": "Point", "coordinates": [16.3671079,48.2596096]},
  "properties": {
    "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cherry_Blossoms_and_Washington_Monument.jpg/320px-Cherry_Blossoms_and_Washington_Monument.jpg",
    "url": "http://en.wikipedia.org/wiki/Washington,_D.C.",
    "marker-symbol": "star",
    "marker-size": "small",
    "marker-color": "#F00",
    "city": "Washington, D.C."
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
    var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
              '<img src="' + feature.properties.image + '">' +
              '   <h2>' + feature.properties.city + '</h2>' +
              '</a>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
      closeButton: false,
      minWidth: 320
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




