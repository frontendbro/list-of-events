import React, { Component } from 'react';
import './index.css';

class Event extends Component {
	constructor(props){
		super(props)
		this.state = {
			favorite: false
		}
	}

	favoriteChoose = (favorite) => {
		this.setState({favorite: !this.state.favorite});
	}

	render() {
		return (
			<li className="event">
				<h3>{this.props.title}</h3>
				<p>Описание: {this.props.description}</p>
				<p>Цена: {this.props.price}</p>
				<p>Вид события: {this.props.type}</p>
				<i className="favorite-icons material-icons">favorite</i>
				<i className="grade-icons material-icons" onClick={this.favoriteChoose}>grade</i>
			</li>
		);
	}
}

export default Event;
