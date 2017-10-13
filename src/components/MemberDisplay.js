import React from 'react';
import { Provider } from 'react-redux'
import MemberList from './MemberList';
import MemberInput from './MemberInput';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addMember} from '../store/members/member_actions'


class MemberDisplay extends React.Component {
	constructor(props, context) {
		super(props, context);	
	}

	render () {
		return (
			<section className="member-list-wrapper col-sm-3">
				<MemberInput/>
				<MemberList/>
			</section>
		)
	}
}



export default MemberDisplay;