import React from 'react'
import NameInput from './NameInput'

class NameList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	handleClick(id) {
		this.props.removeMember(id);
	}

	render () {
		let members = this.props.members.map((member,  index) => (
				<li key={member.name} className="list-group-item">
					{member.name}
					<button type="button" className="btn btn-outline-danger" onClick={()=>this.handleClick(member._id)}>DEL</button>
				</li>
			));
		return (
			<div className="name-list">
				<ul className="list-group">
		            {members}
		        </ul>
		    </div>
        );
	}
}

export default NameList
