// ------------------------------------
// Action Creators
// ------------------------------------
export const groupCreateFailed = () => {
  return {
    type: "GROUP_CREATE_FAILED"
  }
}

export const groupCreateSuccess = (payload) => {
 console.log(payload);
  return {
    type: "GROUP_CREATE_SUCCESS",
    payload
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
export default function(state = {groups: [], style: {disply: 'none'}}, action) {
	console.log(state);
    switch (action.type) {
      case "GROUP_CREATE_SUCCESS":
            return action.payload;
      case "GROUP_CREATE_FAILED":
            return state;
      default:
           return state;
    }
}