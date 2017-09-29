import React from 'react'
import GroupList from './GroupList'
import GroupInput from './GroupInput'


class GroupCard extends React.Component {
	constructor(props, context) {
		super(props, context);	
		this.state = {groups : []};
		this.style = {display: 'none'};
	}


	createLunchGroup (group_num, min_num){
		let members = this.props.members.slice();;
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
		this.setState({groups: groups, max:max_member,  min: mem_count});
		this.style = {display: 'block'};
	}

	render () {

		let groups = this.state.groups.map((group, index) => (
			<div key={index} className="card-wrapper col-6 col-md-4">
              <div className="card">
                <GroupList groupMembers={group}/>
              </div>
            </div>
		));

		return (
			<div className="group-wrapper">
				<GroupInput createLunchGroup={this.createLunchGroup.bind(this)}/>
				<div className="total-name" style={this.style}>{this.state.groups.length} groups | max {this.state.max} members / min {this.state.min} members</div>
				<div className="card-list row">
		            {groups}
		        </div>
			</div>
		);

	}
}

export default GroupCard