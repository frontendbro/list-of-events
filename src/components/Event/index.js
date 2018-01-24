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
				<i className={this.props.like == false ? 'favorite-icons material-icons' : 'favorite-icons material-icons red'} onClick={this.props.addFavorite}>favorite</i>
				<i className={this.props.favorite == false ? 'grade-icons material-icons' : 'grade-icons material-icons orange'}>grade</i>
			</li>
		);
	}
}

export default Event;
