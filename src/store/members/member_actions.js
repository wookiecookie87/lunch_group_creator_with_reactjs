import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} from './members'
import {fetchData} from '../../module/fetchData'

export const addMember = (member) => {
	return (dispatch) => {
  		//dispatch(fetchPostsRequest());
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

		return fetchData(request)
			.then((data) => {
				if(data.length == 0){
					alert("You cannot add existing name.");
				}else{
					dispatch(fetchPostsSuccess(data))
				}
			})
	}
}


export const listMembers = () => {
	return (dispatch) => {
  		//dispatch(fetchPostsRequest());
		const request = new Request('/members', {
			method: 'GET', 
			headers: new Headers({
				Accept: 'application/json',
			})
		});

		return fetchData(request)
			.then((data) => {
				if(data.length == 0){
					dispatch(fetchPostsError())
				}else{
					dispatch(fetchPostsSuccess(data))
				}
			})
	}
}

export const deleteMember = (id) => {
	return (dispatch) => {
  		//dispatch(fetchPostsRequest());
		const request = new Request('/members/'+id, {
			method: "delete",
		});

		return fetchData(request)
			.then((data) => {
				if(data.length == 0){
					dispatch(fetchPostsError())
				}else{
					dispatch(fetchPostsSuccess(data))
				}
			})
	}
}