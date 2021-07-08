"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

exports.default = _default;