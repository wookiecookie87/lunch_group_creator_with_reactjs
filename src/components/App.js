import React from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import MemberDisplay from './MemberDisplay';
import GroupCard from './GroupCard';
import '../styles/main.scss';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);			
	}
	render () {
		return (
			<Provider store={this.props.store}>
				<main className="row">
					<MemberDisplay/>
					<GroupCard />
				</main>
			</Provider>	
		)
	}
}

export default App
