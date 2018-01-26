import React, { Component } from 'react';
import './index.css';
import ControlPanel from '../ControlPanel';
import Event from '../Event';

class EventsList extends Component {
	render() {
		return (
			<div className="events-wrap">
				<ControlPanel inputChange={this.props.inputFilter} selectChange={this.props.selectType}/>
				<ul className="events-list">
					{this.props.eventListData.map((event, i) => 
						<Event key={i} title={event['title']} description={event['description']} price={event['price']} type={event['type']} id={event['id']} like={event['like']} addFavorite = {this.props.addToFavorite} likeAdd={this.props.likeState}/>
					)}
				</ul>
			</div>
		);
	}
}

export default EventsList;
