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

export const fetchPostsError = () =>  {
  return {
    type: "FETCH_ERROR"
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function(state = {}, action) {
	switch (action.type) {
		case "FETCH_REQUEST":
			return state;
		case "FETCH_SUCCESS": 
			return action.payload;
		default:
			return [];
	}
	
}