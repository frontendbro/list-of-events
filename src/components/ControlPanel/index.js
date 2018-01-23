import React, { Component } from 'react';
import './index.css';

class ControlPanel extends Component {
	render() {
		return (
			<div>
				<span>Поиск: </span>
				<input type="text"/>
				<span>Сортировка по типу: </span>
				<select name="" id="">
					<option value="1">concert</option>
					<option value="2">exhibition</option>
				</select>
				<span>Сортировка по стоимости: </span>
				<select name="" id="">
					<option value="1">дороже</option>
					<option value="2">дешевле</option>
				</select>
			</div>
		);
	}
}

export default ControlPanel;