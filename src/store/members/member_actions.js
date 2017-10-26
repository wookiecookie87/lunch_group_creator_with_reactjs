import {fetchData, fetchPostsRequest} from './members'
import {notifyError} from '../notification'




export const addMember = (member) => {
	return (dispatch) => {
  		dispatch(fetchPostsRequest());

		const request = new Request('/members', {
			method: 'POST', 
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({
				name: member,
			})
		});
		dispatch(fetchData(request));
	}
}


export const listMembers = () => {
	return (dispatch) => {
  		dispatch(fetchPostsRequest());

		const request = new Request('/members', {
			method: 'GET', 
			headers: new Headers({
				Accept: 'application/json',
			})
		});
		dispatch(fetchData(request));
	}
}

export const deleteMember = (id) => {
	return (dispatch) => {
  		dispatch(fetchPostsRequest());
  		
		const request = new Request('/members/'+id, {
			method: "delete",
		});

		dispatch(fetchData(request));
	}
}