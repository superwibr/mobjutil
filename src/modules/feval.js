"use strict";

const feval = function (c) {
  return new Function(`
		"use strict";
		return (${c})
	`)();
};

export default feval