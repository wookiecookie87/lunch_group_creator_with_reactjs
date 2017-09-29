import React from 'react'

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

		this.props.createLunchGroup(this.state.group_num, this.state.min_num);
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
						<input type="text" className="form-control" placeholder="# of Groups" aria-label="# of Groups" 
									onChange={this.handleGroupNumChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
					</div>
				</div>
				<div className="col-4 col-sm-3 no-padding-right">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="min size" aria-label="min size" 
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

export default GroupInput