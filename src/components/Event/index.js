import React from 'react';
import './index.css';

function Event({title, description, price, type, id, addFavorite, likeAdd}) {
	return (
		<li id={id} className="event">
			<h2>{title}</h2>
			<p className='event-info'><b>Описание:</b> {description}</p>
			<p><b>Цена:</b> {price}</p>
			<p><b>Вид события:</b>{type}</p>
			<i onClick={() => addFavorite(id)} className={likeAdd.indexOf(id) !== -1 ? 'material-icons orange' : 'material-icons'}>grade</i>
		</li>
	);
}

export default Event;

