import React, { Component } from 'react';
import './index.css';

class Event extends Component {
	render() {
		return (
			<li id={this.props.id} className="event">
				<h2>{this.props.title}</h2>
				<p className='event-info'><b>Описание:</b> {this.props.description}</p>
				<p><b>Цена:</b> {this.props.price}</p>
				<p><b>Вид события:</b> {this.props.type}</p>
				<i onClick={() => this.props.addFavorite(this.props.id)} className={this.props.likeAdd.indexOf(this.props.id) !== -1 ? 'material-icons orange' : 'material-icons'}>grade</i>
			</li>
		);
	}
}

export default Event;
