"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = feval = function (c) {
  return new Function(`
		"use strict";
		return (${c})
	`)();
};

exports.default = _default;