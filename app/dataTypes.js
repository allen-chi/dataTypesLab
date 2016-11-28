module.exports ={
	dataTypes:function(myVar){

		if (myVar ===null || myVar === undefined){
			return "no value";
		}

		if ( myVar === true || myVar === false){
			return myVar;
		}

		if (typeof myVar === 'number'){
			if (myVar < 100){
				return "less than 100";
			}
		}

	}
}