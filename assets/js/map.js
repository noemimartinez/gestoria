$(function(){

  //MAP
  var styleMap = [{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:51}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{gamma:2.51}]},{featureType:"road.arterial",elementType:"all",stylers:[{gamma:1.9}]},{featureType:"water",elementType:"all",stylers:[{gamma:1.36}]},{featureType:"road.highway",elementType:"all",stylers:[{gamma:1.33}]},{featureType:"transit.station.rail",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.bus",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{gamma:1.2},{hue:"#0033ff"}]},{featureType:"administrative.neighborhood",elementType:"labels",stylers:[{gamma:1.43}]},{featureType:"water",elementType:"all",stylers:[{lightness:-47}]},{featureType:"all",elementType:"all",stylers:[{saturation:-100}]},{featureType:"road.arterial",elementType:"labels",stylers:[{lightness:23}]}
                  ,{
                    "featureType": "transit",
                    "elementType": "labels.text",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                  },
                ];

  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    styles: styleMap,
    draggable: true,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var address = '148 Montague Street Brooklyn, New York 11201';
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          icon: 'http://homestories.waavi.com/assets/img/map-icon.png',
          position: results[0].geometry.location,
          title: 'HomeStories'
      });
      var contentString = '<div id="content"><img src="http://homestories.waavi.com/assets/img/logo.png" style="width:250px;"><p style="text-align:center; font-size: 16px;">148 Montague Street</p></div>';
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map,marker);
      });
      google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close(map,marker);
      });
      $('#infoContainer').hide();
    }
  });
});