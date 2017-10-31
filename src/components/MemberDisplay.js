import React from 'react';

import MemberList from './MemberList';
import MemberInput from './MemberInput';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {listMembers, deleteMember, addMember} from '../store/members/member_actions'


class MemberDisplay extends React.Component {
	constructor(props, context) {
		super(props, context);	
	}


	componentDidMount(){
		const { dispatch } = this.props;
	  	dispatch(listMembers());
	}

	deleteMember(id){
		const { dispatch } = this.props;
	  	dispatch(deleteMember(id));
	}

	addMember(name){
		const { dispatch } = this.props;
	  	dispatch(addMember(name));
	}
	
	render () {
		return (
			<section className="member-list-wrapper col-sm-3">
				<MemberInput members={this.props.members} addMember={this.addMember.bind(this)}/>
				<MemberList members={this.props.members} deleteMember={this.deleteMember.bind(this)}/>
			</section>
		)
	}
}

function mapStateToProps(state){
	return {
		members : state.members
	}
}


export default connect(mapStateToProps)(MemberDisplay);