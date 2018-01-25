import React, { Component } from 'react';
import './index.css';

class Event extends Component {
	render() {
		return (
			<li id={this.props.id} className="event">
				<h3>{this.props.title}</h3>
				<p>Описание: {this.props.description}</p>
				<p>Цена: {this.props.price}</p>
				<p>Вид события: {this.props.type}</p>
				<i onClick={() => this.props.addFavorite(this.props.id)} className={this.props.like === false ? 'favorite-icons material-icons' : 'favorite-icons material-icons red'}>favorite</i>
			</li>
		);
	}
}

export default Event;
