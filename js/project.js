var map = L.mapbox.map('map', 'spuz78.map-6wl7vp86');

map.scrollWheelZoom.disable();
map.touchZoom.disable();
map.dragging.disable();

var geoJson = [{
  type: 'Feature',
  "geometry": {
    "type": "Point",
    "coordinates": [16.3671079,48.2596096]
  },
  "properties": {
    "title": "Ordination",
    "description": "Heiligenstädter Straße 195, 1190 Wien",
    "marker-size": "large",
    "marker-color": "#002145"
    }
}];

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);

// Cycle through markers once geoJson is ready.
// Add custom popups to each using our custom feature properties
// map.markerLayer.on('ready', function(e) {
//   this.eachLayer(function(marker) {

//     var feature = marker.feature;

//   });
// });

map.markerLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

map.setView([48.2596096, 16.3671079], 16);

$(document).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        return false;
      }
    }
  });

  $('.top').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  })

  $('.simple-ajax-popup-align-top').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  $('.simple-ajax-popup').magnificPopup({
    type: 'ajax'
  });


    $('.panel').hide();

    // $('.toggle').click(function() {

    //   $('.panel').slideToggle('slow')
    // });


  $('.toggle').click(function() {
     var txt = $('.panel').is(':visible') ? 'Mehr anzeigen' : 'Weniger anzeigen';
     $(".toggle").text(txt);
     $(".panel").slideToggle('slow');
});


});




