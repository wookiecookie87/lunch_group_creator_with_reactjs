export const fetchData = (request) => {
	return fetch(request)
		.then((response) => {
		 		if(!response.ok) {
		 			return response.json().then(json => {
						return json;
					});
		 		}else{
			    	return response.json().then(json => {
						return json;
					});
		    	}
	    })
	}	
