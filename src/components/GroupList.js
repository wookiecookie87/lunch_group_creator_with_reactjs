import React from 'react'

class GroupList extends React.Component{
	render () {
		console.log(this.props.groupMembers);
		let groupList = this.props.groupMembers.map((member) => (
			<li className="list-group-item">{member.name}</li>
		));

		return (
			<ul className="list-group list-group-flush">
				{groupList}
            </ul>
		)
	}
}

export default GroupList