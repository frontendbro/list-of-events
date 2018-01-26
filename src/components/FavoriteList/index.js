import React, { Component } from 'react';
import './index.css';

class FavouriteList extends Component {
	render() {
		return (
			<div className="favorite-wrap">
				<h3><i className='material-icons orange'>grade</i>Favourite List</h3>
				<ul className="favorite-list">
					{this.props.favoriteDataProps.map((favoriteEvent, i) => {
						return 	<li className='favorite-item'>
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
}

export default FavouriteList;
