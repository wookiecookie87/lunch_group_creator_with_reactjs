import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addMember} from '../store/members/member_actions'

class MemberInput extends React.Component{
	constructor(props, context) {
		super(props, context);		
		this.state = {
			name: ""
		};
	}

	handleClick() {
		if(!this.state.name) {
			alert("Please enter name.");
			return ;
		}
		this.props.addMember(this.state.name)
		this.setState({name : ''})
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	}

	handleChange(event) {
		this.setState({name : event.target.value})
	}


	render () {
		return (
			<div className="add-name-input">
	            <div className="input-group">
	              <input type="text" className="form-control" placeholder="Enter name" aria-label="Enter name" 
	              		value={this.state.name} onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
	              <span className="input-group-btn">
	                <button className="btn btn-secondary" type="button" onClick={this.handleClick.bind(this)}>ADD</button>
	              </span>
	            </div>
	         </div>
		)
	}
}


function mapStateToProps(state){
	return {
		members : state.memberss
	}
}

function matchDispathToProps(dispatch){
	return bindActionCreators(
		{addMember : addMember,
	}, dispatch)
}


export default connect(mapStateToProps,matchDispathToProps)(MemberInput);