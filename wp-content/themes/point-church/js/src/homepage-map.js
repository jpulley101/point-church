export class HomepageMap {

  map;
  MY_MAPTYPE_ID = 'homepage_map';

  constructor(){
    HomepageMap.buildHomepageMap();
  }

  static buildHomepageMap(){


  	google.maps.event.addDomListener(window, 'load', initialize);
      
  	function initialize() {
        
      var featureOpts = [
        {
          stylers: [
            { hue: '#000000' },
            { saturation: -100 },
            { lightness: -10 },
            { visibility: 'simplified' },
            { gamma: 0.5 },
            { weight: 0.5 },
            { invert_lightness: true }
          
          ]
        },
        {
          elementType: 'labels',
          stylers: [
            { visibilty: "off" }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            { color: '#333333' }
          ]
        },
        {
        	featureType: "road",
        	elementType: "labels",
        	stylers: [
          		{ visibility: "off" }
        	]
        },
        {
        	featureType: "poi",
        	elementType: "labels",
        	stylers: [
        		{ visibility: "off" }
        	]
        }	
      ];

      var mapOptions = {
    	    zoom: 11,
    	    mapTypeControlOptions: {
    	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, this.MY_MAPTYPE_ID]
    	    },
    	    mapTypeId: this.MY_MAPTYPE_ID,
    	    scrollwheel: false
      };

      this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var styledMapOptions = {
        name: 'The Point Church'
      };

      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

      this.map.mapTypes.set(this.MY_MAPTYPE_ID, customMapType);

      var image = '/wp-content/themes/point-church/images/piont-church-marker.png';

      var apex = new google.maps.Marker({
          position: new google.maps.LatLng( 35.712722, -78.840252 ),
          map: this.map,
          title: 'Apex Campus',
          icon: image
      });

      var apexContent = '<div id="map-info">'+
          '<h4 class="campus-name">Apex Campus<h4>'+
          '<p class="address">1402 E Williams St, Apex, NC 27539</p>'+
          '</div>';
        
      var apexInfo = new google.maps.InfoWindow({
          content: apexContent
      });

      var sRaleigh = new google.maps.Marker({
          position: new google.maps.LatLng( 35.730623, -78.683347 ),
          map: this.map,
          title: 'South Raleigh Campus',
          icon: image
      });

      var sRaleighContent = '<div id="map-info">'+
          '<h4 class="campus-name">South Raleigh Campus<h4>'+
          '<p class="address">3700 Lake Wheeler Rd, Raleigh, NC 27603</p>'+
          '</div>';
        
      var sRaleighInfo = new google.maps.InfoWindow({
          content: sRaleighContent
      });

      var nRaleigh = new google.maps.Marker({
          position: new google.maps.LatLng( 35.864017, -78.712082 ),
          map: this.map,
          title: 'North Raleigh Campus',
          icon: image
      });

      var nRaleighContent = '<div id="map-info">'+
          '<h4 class="campus-name">North Raleigh Campus<h4>'+
          '<p class="address">6904 Glenwood Ave Raleigh, NC 27612</p>'+
          '</div>';
        
      var nRaleighInfo = new google.maps.InfoWindow({
          content: nRaleighContent
      });

      var cary = new google.maps.Marker({
          position: new google.maps.LatLng( 35.764780, -78.751460 ),
          map: this.map,
          title: 'Cary Campus',
          icon: image
      });

      var caryContent = '<div id="map-info">'+
          '<h4 class="campus-name">Cary Campus<h4>'+
          '<p class="address">1503 Walnut St, Cary, NC 27511</p>'+
          '</div>';
        
      var caryInfo = new google.maps.InfoWindow({
          content: caryContent
      });

      google.maps.event.addListener(apex, 'click', function() {
        apexInfo.open(this.map,apex);
      });

      google.maps.event.addListener(sRaleigh, 'click', function() {
        sRaleighInfo.open(this.map,sRaleigh);
      });

      google.maps.event.addListener(cary, 'click', function() {
        caryInfo.open(this.map,cary);
      });  

      google.maps.event.addListener(nRaleigh, 'click', function() {
        nRaleighInfo.open(this.map,nRaleigh);
      });
      
  	}

  	function revealMap(){

      $('#map-expand').on('click',function(){

      	$('#map-canvas').toggleClass('expand');
      	google.maps.event.trigger(this.map, 'resize');
      	
        var center = new google.maps.LatLng(35.7400373, -78.7202436);
      	map.panTo(center);
        
      	return false;

      });

  	}
      
  }

}