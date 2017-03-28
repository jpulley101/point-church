define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var CampusMap = exports.CampusMap = function () {
		function CampusMap() {
			_classCallCheck(this, CampusMap);

			this.MY_MAPTYPE_ID = 'campus_map';


			CampusMap.initialize();
		}

		_createClass(CampusMap, null, [{
			key: 'initialize',
			value: function initialize() {

				var lat = $('#map-canvas').data('lat');
				var lng = $('#map-canvas').data('lng');

				var myLatlng = new google.maps.LatLng(lat, lng);

				var featureOpts = [{
					stylers: [{ hue: '#000000' }, { saturation: -100 }, { lightness: -10 }, { visibility: 'simplified' }, { gamma: 0.5 }, { weight: 0.5 }, { invert_lightness: true }]
				}, {
					elementType: 'labels',
					stylers: [
						//  { //visibilty: "off" }
					]
				}, {
					featureType: 'water',
					stylers: [{ color: '#333333' }]
				}, {
					featureType: "road",
					elementType: "labels",
					stylers: [
						//	{ visibility: "off" }
					]
				}, {
					featureType: "poi",
					elementType: "labels",
					stylers: [{ visibility: "off" }]
				}];

				var mapOptions = {
					zoom: 12,
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, this.MY_MAPTYPE_ID]
					},
					mapTypeId: this.MY_MAPTYPE_ID,
					scrollwheel: false,
					center: myLatlng
				};

				this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

				var styledMapOptions = {
					name: 'The Point Church'
				};

				var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

				this.map.mapTypes.set(this.MY_MAPTYPE_ID, customMapType);

				var image = '/wp-content/themes/point-church/images/piont-church-marker.png';

				var location = new google.maps.Marker({
					position: new google.maps.LatLng(lat, lng),
					map: this.map,
					title: 'Location',
					icon: image
				});
			}
		}, {
			key: 'buildCampusMap',
			value: function buildCampusMap() {
				google.maps.event.addDomListener(window, 'load', this.initialize);
			}
		}]);

		return CampusMap;
	}();
});
//# sourceMappingURL=../js/maps/campus-map.js.map
