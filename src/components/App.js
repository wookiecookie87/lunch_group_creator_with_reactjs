import React from 'react';
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
			<main className="row">
				<MemberDisplay/>
				<GroupCard />
			</main>
		)
	}
}

export default App;
