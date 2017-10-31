import {notifyError} from "../notification"

// ------------------------------------
// Action Creators
// ------------------------------------
export const fetchPostsRequest = () => {
  return {
    type: "FETCH_REQUEST"
  }
}

export const fetchPostsSuccess = (payload) => {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

export const fetchPostsError = (msg) =>  {
  return {
    type: "FETCH_ERROR",
  }
}


export const fetchData = (request) => {
  return (dispatch) => {
    
    dispatch(fetchPostsRequest());

     fetch(request)
    .then((response) => {
        if(!response.ok) {
          response.json().then(json => {
               dispatch(notifyError(json.detail.code))
          });
        }else{
          response.json().then(json => {
              dispatch(fetchPostsSuccess(json))
          });
        }
      })
  }
} 

// ------------------------------------
// Reducer
// ------------------------------------
export default function(state = [], action) {
	switch (action.type) {
		case "FETCH_REQUEST":
			return state;
		case "FETCH_SUCCESS": 
			return action.payload;
    case "FETCH_ERROR": 
      return state;
		default:
			return state;
	}
	
}