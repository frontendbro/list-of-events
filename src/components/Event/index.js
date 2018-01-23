import React, { Component } from 'react';
import './index.css';

class Event extends Component {
	constructor(props){
		super(props)
		this.state = {
			favorite: false,
			like: false
		}
	}

	favoriteChoose = (favorite) => {
		this.setState({favorite: !this.state.favorite});
	}
	likeChoose = (like) => {
		this.setState({like: !this.state.like});
	}

	render() {
		return (
			<li className="event">
				<h3>{this.props.title}</h3>
				<p>Описание: {this.props.description}</p>
				<p>Цена: {this.props.price}</p>
				<p>Вид события: {this.props.type}</p>
				<i className={this.state.like == false ? 'favorite-icons material-icons' : 'favorite-icons material-icons red'} onClick={this.likeChoose}>favorite</i>
				<i className={this.state.favorite == false ? 'grade-icons material-icons' : 'grade-icons material-icons orange'} onClick={this.favoriteChoose}>grade</i>
			</li>
		);
	}
}

export default Event;
