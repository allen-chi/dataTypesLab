module.exports ={
	dataTypes:function(myVar){

		if (myVar ===null || myVar === undefined){
			return "no value";
		}

		if ( myVar === true || myVar === false){
			return myVar;
		}

		if (typeof myVar === "number"){
			if (myVar < 100){
				return "less than 100";
			}
			else if (myVar > 100){
				return "more than 100";
			}
			else if (myVar === 100){
				return "equal to 100";
			}
		}

		if (typeof myVar === "string"){
			if (myVar || myVar === null || !myVar){
				return myVar.length;
			}
		}

	}
}