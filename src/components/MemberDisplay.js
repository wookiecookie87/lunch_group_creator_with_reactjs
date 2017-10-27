import React from 'react';

import MemberList from './MemberList';
import MemberInput from './MemberInput';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {listMembers, deleteMember} from '../store/members/member_actions'


class MemberDisplay extends React.Component {
	constructor(props, context) {
		super(props, context);	
	}


	componentDidMount(){
		const { dispatch } = this.props;
	  	dispatch(listMembers());
	 }

	render () {
		return (
			<section className="member-list-wrapper col-sm-3">
				<MemberInput />
				<MemberList members={this.props.members} deleteMember={this.props.deleteMember}/>
			</section>
		)
	}
}

function mapStateToProps(state){
	return {
		members : state.members
	}
}


function matchDispathToProps(dispatch){
	return bindActionCreators(
		{deleteMember : (id) => dispatch(deleteMember(id))}, dispatch)
}



export default connect(mapStateToProps)(MemberDisplay);