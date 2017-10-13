import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {listMembers, deleteMember} from '../store/members/member_actions'

class NameList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
	  	this.props.listMembers()
	 }

	render () {
		let members = this.props.members.map((member,  index) => (
				<li key={member.name} className="list-group-item">
					{member.name}
					<button type="button" className="btn btn-outline-danger" onClick={()=>this.props.deleteMember(member._id)}>DEL</button>
				</li>
			));
		return (
			<div className="name-list">
			<div className="total-name">total of {this.props.members.length} members</div>
				<ul className="list-group">
		            {members}
		        </ul>
		    </div>
        );
	}
}

function mapStateToProps(state){
	return {
		members : state.members
	}
}

function matchDispathToProps(dispatch){
	return bindActionCreators(
		{listMembers : listMembers,
					deleteMember : deleteMember			
	}, dispatch)
}




export default connect(mapStateToProps,matchDispathToProps)(NameList)
