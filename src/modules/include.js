"use strict";

export default include = async function(source, strict){
	let f = async function(s){
		let data = await fetch(s).then(res => res.text())
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
	sources = Array(source)
	sources.forEach(s => {
		data = await f( new URL(s) )
	});

	if ( Array.isArray(source) && data ){
		return data
	}else{
		return true;
	}
};