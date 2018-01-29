import React from 'react';
import './index.css';

function FavouriteList({favoriteDataProps}) {
	return (
		<div className="favorite-wrap">
			<h3><i className='material-icons orange'>grade</i>Favourite List</h3>
			<ul className="favorite-list">
				{favoriteDataProps.map((favoriteEvent, i) => {
					return 	<li className='favorite-item' key={i}>
						<h4>{favoriteEvent['title']}</h4>
						<p><b>Описание:</b> {favoriteEvent['description']}</p>
						<p><b>Цена:</b> {favoriteEvent['price']}</p>
						<p><b>Вид события:</b> {favoriteEvent['type']}</p>
					</li>
				})}
			</ul>
		</div>
	);
}

export default FavouriteList;
