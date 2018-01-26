import React, { Component } from 'react';
import './index.css';
import EventsList from '../EventsList';
import FavoriteList from '../FavoriteList';


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: 'List of events',
			data: [
				{
					title: "Концерт Depeche Mode",
					description: "Описание концерта здесь",
					price: 300,
					type: "concert",
					id: 1
				},
				{
					title: "Выставка Модильяни",
					description: "Описание выставки здесь",
					price: 200,
					type: "exhibition",
					id: 2
				},
				{
					title: "Концерт Metallica",
					description: "Описание концерта здесь",
					price: 1000,
					type: "concert",
					id: 3
				},
				{
					title: "Выставка Пикассо",
					description: "Описание выставки здесь",
					price: 1200,
					type: "exhibition",
					id: 4
				},
				{
					title: "Выставка Малевича",
					description: "Описание выставки здесь",
					price: 2200,
					type: "exhibition",
					id: 5
				},
				{
					title: "Выставка Пабло",
					description: "Описание выставки здесь",
					price: 1200,
					type: "exhibition",
					id: 6
				},
				{
					title: "Концерт Metallica",
					description: "Описание концерта здесь",
					price: 1000,
					type: "concert",
					id: 7
				},
				{
					title: "Концерт Nirvana",
					description: "Описание концерта здесь",
					price: 1000000,
					type: "concert",
					id: 8
				},
				{
					title: "Концерт ДеЦл",
					description: "Описание концерта здесь",
					price: 0,
					type: "concert",
					id: 9
				}
			],
			filterValue: '',
			likeId: [],
			selectType: 'all'
		}
	}

	//изменение state.data по поиску
	filterTitle = (e) => {
		let searchQuery = e.target.value.toLowerCase();
		this.setState({
			filterValue: searchQuery
		});
	}

	//изменение state.data по like
	likeChoose = (id) => {
		let arrLikes = this.state.likeId;
		let i = arrLikes.indexOf(id);
		if (arrLikes.indexOf(id) !== -1){
			arrLikes.splice(i,1);
		} 
		else {
			arrLikes.push(id);
		}
		this.setState({
			likeId: arrLikes
	 })
	}

	//изменение state.data по типу мероприятия
	selectChange = (e) => {
		this.setState ({
			selectType: e.target.value
		});	
	}

	render() {
		
		let favoriteData = this.state.data.filter((item) => {
			return this.state.likeId.indexOf(item.id)!== -1;
		});

		const eventListData = this.state.data.filter((item) => {
			let searchValue = item.title.toLowerCase();
			return searchValue.indexOf(this.state.filterValue) !== -1;
		}).filter((item) => {
			let type = item.type;
			if (this.state.selectType === 'all'){
				return true;
			}
			return type.indexOf(this.state.selectType) !== -1;
		});

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">{this.state.title}</h1>
				</header>
				<div className="wrapper">
					<EventsList eventListData={eventListData} addToFavorite={this.likeChoose} inputFilter={this.filterTitle} likeState={this.state.likeId} selectType={this.selectChange}/>
					<FavoriteList favoriteDataProps={favoriteData} />
				</div>
			</div>
		);
	}
}

export default App;
