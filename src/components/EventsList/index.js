import React from 'react';
import './index.css';
import ControlPanel from '../ControlPanel';
import Event from '../Event';

function EventsList({eventListData, addToFavorite, inputFilter, likeState, selectType}) {
	return (
		<div className="events-wrap">
			<ControlPanel inputChange={inputFilter} selectChange={selectType}/>
			<ul className="events-list">
				{eventListData.map((event, i) =>
					<Event key={i} title={event['title']} description={event['description']} price={event['price']} type={event['type']} id={event['id']} addFavorite = {addToFavorite} likeAdd={likeState}/>
				)}
			</ul>
		</div>
	);
}

export default EventsList;