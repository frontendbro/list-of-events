import React, { Component } from 'react';
import './index.css';
import Event from '../Event';

class EventsList extends Component {
	render() {
		return (
			<div className="events-list">
				<i class="material-icons">list</i>
				<Event />
			</div>
		);
	}
}

export default EventsList;
