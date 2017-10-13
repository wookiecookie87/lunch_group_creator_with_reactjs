export const fetchData = (request) => {
	return fetch(request)
		.then((response) => {
		 		if(!response.ok) {
		 			return [];
		 		}else{
			    	return response.json().then(json => {
						return json;
					});
		    	}
	    })
	}	
