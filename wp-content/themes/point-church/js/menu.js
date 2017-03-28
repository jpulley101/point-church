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

  var Menu = exports.Menu = function () {
    function Menu() {
      _classCallCheck(this, Menu);

      var button = '.off-canvas-control, .off-canvas-click-blocker';
      var selector = '.off-canvas';

      $(button).on('click', function () {
        Menu.toggleMenu(selector);
      });
    }

    _createClass(Menu, null, [{
      key: 'toggleMenu',
      value: function toggleMenu(selector) {

        if ($(selector).hasClass('open')) {
          this.hideMenu(selector);
        } else {
          this.showMenu(selector);
        }
      }
    }, {
      key: 'hideMenu',
      value: function hideMenu(selector) {
        $(selector).removeClass('open');
        $('body').removeClass('off-canvas-open');
      }
    }, {
      key: 'showMenu',
      value: function showMenu(selector) {
        $(selector).addClass('open');
        $('body').addClass('off-canvas-open');
      }
    }]);

    return Menu;
  }();
});
//# sourceMappingURL=../js/maps/menu.js.map
