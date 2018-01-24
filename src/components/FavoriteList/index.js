import React, { Component } from 'react';
import './index.css';

class FavouriteList extends Component {
	render() {
		return (
			<div className="favorite-wrap">
				<h3>Favourite List</h3>
				<i class="material-icons">favorite</i>
				<i class="material-icons">favorite</i>
				<i class="material-icons">favorite</i>
				<ul className="favorite-list">
					{this.props.favoriteDataProps.map((favoriteEvent, i) => {
						return 	<li>
											<h3>{favoriteEvent['title']}</h3>
											<p>Описание: {favoriteEvent['description']}</p>
											<p>Цена: {favoriteEvent['price']}</p>
											<p>Вид события: {favoriteEvent['type']}</p>
										</li>
					})}
				</ul>
			</div>
			
		);
	}
}

export default FavouriteList;
