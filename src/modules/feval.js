"use strict";

export default feval = function (c) {
  return new Function(`
		"use strict";
		return (${c})
	`)();
};