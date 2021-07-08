"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = interval = function (callback, ms, times) {
  let r = function () {
    var interv = function (w, t) {
      return function () {
        if (r.s == true) return;

        if (typeof t === "undefined" || t-- > 0) {
          setTimeout(interv, w);

          try {
            callback.call(null);
          } catch (e) {
            t = 0;
            throw e.toString();
          }
        }
      };
    }(ms, times);

    setTimeout(interv, ms);
  };

  r.s = false;

  r.stop = function () {
    r.s = true;
  };

  r();
  return r;
};

exports.default = _default;