define(["exports", "jquery"], function (exports, _jquery) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Menu = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

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

  var Menu = exports.Menu = function () {
    function Menu() {
      _classCallCheck(this, Menu);

      var button = ".off-canvas-control, .off-canvas-click-blocker";
      var selector = ".off-canvas";

      (0, _jquery2.default)(button).on("click", function () {
        return Menu.toggleMenu(selector);
      });
    }

    _createClass(Menu, null, [{
      key: "toggleMenu",
      value: function toggleMenu(selector) {

        if ((0, _jquery2.default)(selector).hasClass("open")) {

          this.hideMenu(selector);
        } else {

          this.showMenu(selector);
        }
      }
    }, {
      key: "hideMenu",
      value: function hideMenu(selector) {

        (0, _jquery2.default)(selector).removeClass("open");
        (0, _jquery2.default)("body").removeClass("off-canvas-open");
      }
    }, {
      key: "showMenu",
      value: function showMenu(selector) {

        (0, _jquery2.default)(selector).addClass("open");
        (0, _jquery2.default)("body").addClass("off-canvas-open");
      }
    }]);

    return Menu;
  }();
});
//# sourceMappingURL=../js/maps/menu.js.map
