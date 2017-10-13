export const createGroupSuccess = (payload) => {
  return {
    type: "GROUP_CREATED",
    payload
  }
}



// ------------------------------------
// Reducer
// ------------------------------------
export default function(state = {groups: [], style: {disply: 'none'}}, action) {

    switch (action.type) {
       case "GROUP_CREATED":
            return action.payload; 
      default:
           return state;
    }
}