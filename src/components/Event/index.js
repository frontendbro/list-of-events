import React, { Component } from 'react';
import './index.css';

class Event extends Component {
	render() {
		return (
			<li className="event">
				<h3>{this.props.title}</h3>
				<p>Описание: {this.props.description}</p>
				<p>Цена: {this.props.price}</p>
				<p>Вид события: {this.props.type}</p>
				<i class="material-icons">favorite</i>
				<i class="material-icons">grade</i>
			</li>
		);
	}
}

export default Event;
