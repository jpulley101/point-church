define(["exports", "jquery"], function (exports, _jquery) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Header = undefined;

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

  var Header = exports.Header = function () {
    function Header() {
      _classCallCheck(this, Header);

      var stop = Math.round((0, _jquery2.default)(window).scrollTop());
      var introBottom = (0, _jquery2.default)("body").offset().top;

      (0, _jquery2.default)(window).on("scroll", function () {

        if (stop > introBottom) {

          Header.addVisibility(".header");
        } else {

          Header.removeVisibility(".header");
        }
      });
    }

    _createClass(Header, null, [{
      key: "addVisibility",
      value: function addVisibility(selector) {

        (0, _jquery2.default)(selector).addClass("past-intro");
      }
    }, {
      key: "removeVisibility",
      value: function removeVisibility(selector) {

        (0, _jquery2.default)(selector).removeClass("past-intro");
      }
    }]);

    return Header;
  }();
});
//# sourceMappingURL=../js/maps/header.js.map
