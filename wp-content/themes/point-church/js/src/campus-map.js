import $ from "jquery";
import google from "google-maps";

export class CampusMap {

  constructor () {

    this.myMaptypeID = "campus_map";
    CampusMap.initialize();

  }

  static initialize () {

    this.map.lat = $("#map-canvas").data("lat");
    this.map.lng = $("#map-canvas").data("lng");

    const myLatLng = (lat, lng) => new google.maps.LatLng(lat, lng);

    const featureOpts = [
      {
        stylers: [
          { hue: "#000000" },
          { saturation: -100 },
          { lightness: -10 },
          { visibility: "simplified" },
          { gamma: 0.5 },
          { weight: 0.5 },
          { invert_lightness: true }
        ]
      },
      { elementType: "labels" },
      {
        featureType: "water",
        stylers: [
          { color: "#333333" }
        ]
      },
      {
        elementType: "labels",
        featureType: "road"
      },
      {
        elementType: "labels",
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    const mapOptions = {
      center: myLatLng,
      mapTypeControlOptions: {
        mapTypeIds: [
          google.maps.MapTypeId.ROADMAP,
          this.myMaptypeID
        ]
      },
      mapTypeId: this.myMaptypeID,
      scrollwheel: false,
      zoom: 12
    };

    const customMapType = new google.maps.StyledMapType(
      featureOpts,
      { name: "The Point Church" }
    );

    const image =
    "/wp-content/themes/point-church/images/piont-church-marker.png";

    this.map.marker = new google.maps.Marker({

      icon: image,
      map: this.map,
      position: myLatLng,
      title: "Location"

    });

    this.map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );

    this.map.mapTypes.set(this.myMaptypeID, customMapType);

  }

  static buildCampusMap () {

    google.maps.event.addDomListener(window, "load", this.initialize);

  }

}
