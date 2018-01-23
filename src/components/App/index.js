import React, { Component } from 'react';
import './index.css';
import EventsList from '../EventsList';


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">List of events</h1>
				</header>
				<div className="wrapper">
					<EventsList />
				</div>
			</div>
		);
	}
}

export default App;
