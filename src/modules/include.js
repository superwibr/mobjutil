"use strict";

export default include = async function(source, strict){
	let f = async function(s){
		let data = await fetch(s).then(res => res.text())
		switch(strict){
			case true:{
				( new Function(` 
					"use strict";
					!function(t){
						t()
					}(${data});
				`) )() // strict set to true, runs an IIFE closure to prevent context isolation vulnerabilities 
			};break;

			case 2:{
				mobjutil.feval(data) // strict set to 2, runs feval
			};break;

			case 3:{
				let s = document.createElement('script');
				s.src = "data:text/javascript;base64,"+btoa(data);
				s.type = "module"; // strict set to 3, adds it to document head as a module
			};break;

			default:{
				(new Function(data))() // strict false or undefined, runs simple IIFE
			};break;
		}
		if(strict == true){
			( new Function(` 
				"use strict";
				!function(t){
					t()
				}(${data});
			`) )() // strict set to true, runs an IIFE closure to prevent context isolation vulnerabilities 
		}else if(strict == 2){
			mobjutil.feval(data) // strict set to 2, runs feval
		}else{
			(new Function(data))() // strict false or undefined, runs simple IIFE
		}
	};

	let data
	sources = new Array(source)
	sources.forEach(async s => {
		data = await f( new URL(s) )
	});

	if ( Array.isArray(source) && data ){
		return data
	}else{
		return true;
	}
};