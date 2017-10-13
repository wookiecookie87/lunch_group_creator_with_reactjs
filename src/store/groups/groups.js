// ------------------------------------
// Reducer
// ------------------------------------
export default function(state = {groups: [], style: {disply: 'none'}}, action) {
    switch (action.type) {
      case "GROUP_CREATED":
            return action.payload;
      case "GROUP_CREATE_FAILED":
            return state;
      default:
           return state;
    }
}