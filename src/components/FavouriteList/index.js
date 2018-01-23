import React, { Component } from 'react';
import './index.css';

class FavouriteList extends Component {
	render() {
		return (
			<div className="favourite-wrap">
				<h3>Favourite List</h3>
				<i class="material-icons">favorite</i>
				<i class="material-icons">favorite</i>
				<i class="material-icons">favorite</i>
				<ul className="favourite-list">
					<li>favouriteItem</li>
				</ul>
			</div>
			
		);
	}
}

export default FavouriteList;
