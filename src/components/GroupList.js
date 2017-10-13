import React from 'react'

class GroupList extends React.Component{
	constructor(props, context) {
		super(props, context);
	}

	render () {
		let groupList = this.props.groupMembers.map((member) => (
			<li key={member.name} className="list-group-item">{member.name}</li>
		));

		return (
			<ul className="list-group list-group-flush">
				{groupList}
            </ul>
		)
	}
}

export default GroupList;