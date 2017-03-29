define(["exports", "jquery", "google-maps"], function (exports, _jquery, _googleMaps) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CampusMap = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  var _googleMaps2 = _interopRequireDefault(_googleMaps);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

      this.myMaptypeID = "campus_map";
      CampusMap.initialize();
    }

    _createClass(CampusMap, null, [{
      key: "initialize",
      value: function initialize() {

        this.map.lat = (0, _jquery2.default)("#map-canvas").data("lat");
        this.map.lng = (0, _jquery2.default)("#map-canvas").data("lng");

        var myLatLng = function myLatLng(lat, lng) {
          return new _googleMaps2.default.maps.LatLng(lat, lng);
        };

        var featureOpts = [{
          stylers: [{ hue: "#000000" }, { saturation: -100 }, { lightness: -10 }, { visibility: "simplified" }, { gamma: 0.5 }, { weight: 0.5 }, { invert_lightness: true }]
        }, { elementType: "labels" }, {
          featureType: "water",
          stylers: [{ color: "#333333" }]
        }, {
          elementType: "labels",
          featureType: "road"
        }, {
          elementType: "labels",
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        }];

        var mapOptions = {
          center: myLatLng,
          mapTypeControlOptions: {
            mapTypeIds: [_googleMaps2.default.maps.MapTypeId.ROADMAP, this.myMaptypeID]
          },
          mapTypeId: this.myMaptypeID,
          scrollwheel: false,
          zoom: 12
        };

        var customMapType = new _googleMaps2.default.maps.StyledMapType(featureOpts, { name: "The Point Church" });

        var image = "/wp-content/themes/point-church/images/piont-church-marker.png";

        this.map.marker = new _googleMaps2.default.maps.Marker({

          icon: image,
          map: this.map,
          position: myLatLng,
          title: "Location"

        });

        this.map = new _googleMaps2.default.maps.Map(document.getElementById("map-canvas"), mapOptions);

        this.map.mapTypes.set(this.myMaptypeID, customMapType);
      }
    }, {
      key: "buildCampusMap",
      value: function buildCampusMap() {

        _googleMaps2.default.maps.event.addDomListener(window, "load", this.initialize);
      }
    }]);

    return CampusMap;
  }();
});
//# sourceMappingURL=../js/maps/campus-map.js.map
