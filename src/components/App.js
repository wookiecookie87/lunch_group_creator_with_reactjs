import React from 'react';
// import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import NameList from './NameList';
import GroupCard from './GroupCard';
import NameInput from './NameInput';
import '../styles/main.scss';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);		
		this.state = {
			members: []
		};
	}

	fetchData(request){
		return fetch(request)
		.then(this.handleErrors)
		.then(this.parseResponse.bind(this))
	}

	handleErrors(response) {
	    if (!response.ok) {
	        throw Error(response.statusText);
	    }
	    return response;
	}

	parseResponse(response) {
		const self = this;
		response.json().then(json => {
			self.setState({members : json})
		});
	}
	
	addMemberToList(member) {
		//Add member to the list
		const request = new Request('/members', {
			method: 'POST', 
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({
				name: member,
			})
		});
		
		this.fetchData(request)
		.catch((err) => {
			console.log(err);
			alert("You cannot add existing name.");
		});
	}

	removeMember(id) {
		//Remove member form the list
		const request = new Request('/members/'+id, {
			method: "delete",
		});
		
		this.fetchData(request)
		.catch((err) => {
			console.log(err);
		});
	} 

	render () {
		return (
			<Provider store={this.props.store}>
				<main className="row">
					<section className="member-list-wrapper col-sm-3">
						<NameInput/>
						<NameList/>
					</section>
					<section className="lunch-group-wrapper col-sm-9">
						<GroupCard />
					</section>
				</main>
			</Provider>	
		)
	}
}

export default App
