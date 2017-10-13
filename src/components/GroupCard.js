import React from 'react'
import GroupList from './GroupList'
import GroupInput from './GroupInput'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {initGroups} from '../store/group_action'


class GroupCard extends React.Component {
	constructor(props, context) {
		super(props, context);	
	}

	render () {
		console.log(this.props.groups);
		let groups = this.props.groups.groups.map((group, index) => (
			<div key={index} className="card-wrapper col-6 col-md-4">
              <div className="card">
                <GroupList groupMembers={group}/>
              </div>
            </div>
		));

		return (
			<div className="group-wrapper">
				<GroupInput/>
				<div className="total-name" style={this.props.style}>{this.props.groups.groups.length} groups | max {this.props.groups.max} members / min {this.props.groups.min} members</div>
				<div className="card-list row">
		            {groups}
		        </div>
			</div>
		);

	}
}


function mapStateToProps(state){
	return {
		//members : state.members,
		groups : state.groups
	}
}

export default connect(mapStateToProps)(GroupCard)