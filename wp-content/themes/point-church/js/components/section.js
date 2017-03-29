define(["exports", "jquery"], function (exports, _jquery) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Section = undefined;

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

  var Section = exports.Section = function () {
    function Section() {
      _classCallCheck(this, Section);

      this.photos = (0, _jquery2.default)(".section.photo");

      Section.setBackgroundImages(".photo.section");
    }

    _createClass(Section, null, [{
      key: "setBackgroundImages",
      value: function setBackgroundImages(selector) {

        (0, _jquery2.default)(selector).each(function buildScriptTags() {

          (0, _jquery2.default)(this).prepend("<style>\n            #" + (0, _jquery2.default)(this).attr("id") + "{ \n              background-image: url(" + (0, _jquery2.default)(this).data("image") + ");\n            }\n          </style>");
        });
      }
    }]);

    return Section;
  }();
});
//# sourceMappingURL=../../js/maps/components/section.js.map
