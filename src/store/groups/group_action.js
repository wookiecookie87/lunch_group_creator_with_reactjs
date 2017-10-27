import {groupCreateFailed, groupCreateSuccess} from "./groups";
import {notifyError} from "../notification"

export const createGroups = (group_num, min_num, member_arr) => {
	return (dispatch) => {
		let members = [...member_arr];
		const group_count= parseInt(group_num);
		const min = parseInt(min_num);
		const mem_count = Math.floor(members.length / group_count);

		let remainder = members.length % group_count;
		const max_member = mem_count + Math.ceil((remainder) / (remainder + 1));
		
		//when groups cannot be created
		if(mem_count < min) {
			dispatch(notifyError('EXCEED_MIN', mem_count));
			return dispatch(groupCreateFailed());
		}
		
		if(mem_count < 1) {
			dispatch(notifyError('EXCEED_MEBERS'));
			return dispatch(groupCreateFailed());
		}

		//Create groups
		let groups = [];	
		for(let i = 0; i < group_count; i++){
			let group = [];
			let counter = mem_count;
			
			/**/	
			if(remainder > 0){
				counter = mem_count + 1; 
			}
			/**/

			//Run random loop
			for(let j = 0; j < counter; j++){
				const rand = Math.floor(Math.random() * members.length);
				if(members[rand]){
	                group.push(members[rand]);
	                members.splice(rand, 1);
	            }
			}
			remainder -= 1;
			group.sort();
			groups.push(group);
		}
		//dispatch(fetchPostsSuccess([{id:1, name: "2322"}]));
		let group = {groups: groups, max:max_member,  min: mem_count};
		return dispatch(groupCreateSuccess(group));
	}

}