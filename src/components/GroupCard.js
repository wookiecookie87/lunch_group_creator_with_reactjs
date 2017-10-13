import React from 'react'
import GroupList from './GroupList'
import GroupInput from './GroupInput'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {initGroups} from '../store/groups/group_action'


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
			<section className="lunch-group-wrapper col-sm-9">	
				<div className="group-wrapper">
					<GroupInput/>
					<div className="total-name" style={this.props.style}>{this.props.groups.groups.length} groups | max {this.props.groups.max} members / min {this.props.groups.min} members</div>
					<div className="card-list row">
			            {groups}
			        </div>
				</div>
			</section>
		);

	}
}


function mapStateToProps(state){
	return {
		groups : state.groups
	}
}

export default connect(mapStateToProps)(GroupCard)