define(['header', 'menu', 'homepage-map', 'campus-map', 'jquery'], function (_header, _menu, _homepageMap, _campusMap, _jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _jquery2.default)(document).ready(function () {

    var header = new _header.Header();
    var menu = new _menu.Menu();
    if ((0, _jquery2.default)('body').hasClass('home')) {
      var homeMap = new _homepageMap.HomepageMap();
    }
    if ((0, _jquery2.default)('body').hasClass('locations')) {
      var campusMap = new _campusMap.CampusMap();
    }
  }); // MAIN.JS
});
//# sourceMappingURL=../js/maps/main.js.map
