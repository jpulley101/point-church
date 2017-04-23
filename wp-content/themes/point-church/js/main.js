define(["jquery", "components/badge", "campus-map", "header", "menu", "components/section"], function (_jquery, _badge2, _campusMap2, _header2, _menu2, _section) {
  "use strict";

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // MAIN.JS
  (0, _jquery2.default)(document).ready(function () {

    var _header = new _header2.Header();
    var _menu = new _menu2.Menu();
    var _badge = new _badge2.Badge();

    /*
    If ($("body").hasClass("home")) { const homeMap = new HomepageMap; }
    */

    if ((0, _jquery2.default)("body").hasClass("locations")) {

      var _campusMap = new _campusMap2.CampusMap();
    }
  });
});
//# sourceMappingURL=../js/maps/main.js.map
