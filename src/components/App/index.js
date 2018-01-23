import React, { Component } from 'react';
import './index.css';
import EventsList from '../EventsList';
import FavouriteList from '../FavouriteList';


class App extends Component {
	render() {
		const data = [
			{
				title: "Концерт Depeche Mode",
				description: "Описание концерта здесь",
				price: 300,
				type: "concert",
			},
			{
				title: "Выставка Модильяни",
				description: "Описание выставки здесь",
				price: 200,
				type: "exhibition",
			},
			{
				title: "Концерт Metallica",
				description: "Описание концерта здесь",
				price: 1000,
				type: "concert",
			},
			{
				title: "Выставка Пикассо",
				description: "Описание выставки здесь",
				price: 1200,
				type: "exhibition",
			}
		];

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">List of events</h1>
				</header>
				<div className="wrapper">
					<EventsList eventListData = {data}/>
					<FavouriteList />
				</div>
			</div>
		);
	}
}

export default App;
