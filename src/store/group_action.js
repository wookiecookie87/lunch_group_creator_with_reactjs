export const createGroups = (group_num, min_num, member_arr) => {
	let members = member_arr.slice();
	const group_count= parseInt(group_num);
	const min = parseInt(min_num);
	const mem_count = Math.floor(members.length / group_count);

	let remainder = members.length % group_count;
	const max_member = mem_count + Math.ceil((remainder) / (remainder + 1));
	
	//when groups cannot be created
	if(mem_count < min) {
		alert("Groups cannot be created. Possible mininum number for a group is "+mem_count);
		return;
	}
	
	if(mem_count < 1) {
		alert("Groups cannot be created. Number for groups exceeds number of members");
		return;
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
	let group = {groups: groups, max:max_member,  min: mem_count};
	return {
		type : 'GROUP_CREATED',
		payload: group 
	};


}