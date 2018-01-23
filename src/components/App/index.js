import React, { Component } from 'react';
import './index.css';
import EventsList from '../EventsList';
import FavoriteList from '../FavoriteList';


class App extends Component {
	/*дату положить в state, написать функцию фильтра вынести всё из компонента event, прокинуть функуии фильтра в клик тупого компонента*/
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
			},
			{
				title: "Выставка Малевича",
				description: "Описание выставки здесь",
				price: 2200,
				type: "exhibition",
			},
			{
				title: "Выставка Пикассо",
				description: "Описание выставки здесь",
				price: 1200,
				type: "exhibition",
				like: false
			}
		];

		// const favoriteData = data.filter((item) => item.like);

		const favoriteData = [
			{
				title: "Выставка Пикассо",
				description: "Описание выставки здесь",
				price: 1200,
				type: "exhibition",
			}
		]

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">List of events</h1>
				</header>
				<div className="wrapper">
					<EventsList eventListData = {data}/>
					<FavoriteList favoriteData = {favoriteData}/>
				</div>
			</div>
		);
	}
}

export default App;
