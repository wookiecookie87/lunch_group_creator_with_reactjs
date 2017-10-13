import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createGroups} from '../store/groups/group_action'


class GroupInput extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			group_num : '', min_num : ''
		}
	}

	handleClick () {
		if(!this.state.group_num || parseInt(this.state.group_num) == 0) {
			alert("Please enter group number.");
			return;
		}
		this.props.createGroups(this.state.group_num, this.state.min_num, this.props.members);
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	}

	handleGroupNumChange (event){
		this.setState({"group_num": event.target.value})
	}

	handleMinNumChange(event) {
		this.setState({"min_num": event.target.value})
	}

	render () {
		return (
			<div className="create-group-input row">
				<div className="col-4 col-sm-3 no-padding-right">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="# of Groups" aria-label="# of Groups" value={this.state.group_num}
									onChange={this.handleGroupNumChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
					</div>
				</div>
				<div className="col-4 col-sm-3 no-padding-right">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="min size" aria-label="min size" value={this.state.min_num}
									onChange={this.handleMinNumChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
					</div>
				</div>
				<div className="col-4 col-sm-4">
					<button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Create</button>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		members : state.members,
	}
}

function matchDispathToProps(dispatch){
	return bindActionCreators({createGroups : createGroups}, dispatch)
}

export default connect(mapStateToProps,matchDispathToProps)(GroupInput)