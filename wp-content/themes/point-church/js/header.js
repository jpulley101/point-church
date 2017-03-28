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

  var Header = exports.Header = function () {
    function Header() {
      _classCallCheck(this, Header);

      var stop = Math.round($(window).scrollTop());
      var introBottom = $('body').offset().top;

      $(window).on('scroll', function () {

        if (stop > introBottom) {
          Header.addVisibility('.header');
        } else {
          Header.removeVisibility('.header');
        }
      });
    }

    _createClass(Header, null, [{
      key: 'addVisibility',
      value: function addVisibility(selector) {
        $(selector).addClass('past-intro');
      }
    }, {
      key: 'removeVisibility',
      value: function removeVisibility(selector) {
        $(selector).removeClass('past-intro');
      }
    }]);

    return Header;
  }();
});
//# sourceMappingURL=../js/maps/header.js.map
