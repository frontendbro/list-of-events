import React, { Component } from 'react';
import './index.css';

class ControlPanel extends Component {
	render() {
		return (
			<div className='control-panel'>
				<div className='control-wrap'>
					<span className='control-wrap__label'>Поиск: </span>
					<input className='control-wrap__input' type="text" onChange={this.props.inputChange}/>
				</div>
				<div className='control-wrap'>
					<span className='control-wrap__label'>Сортировка по типу: </span>
					<select name="" id="">
						<option value="1">concert</option>
						<option value="2">exhibition</option>
					</select>
				</div>
				<div className='control-wrap'>
					<span className='control-wrap__label'>Сортировка по стоимости: </span>
					<select name="" id="">
						<option value="1">дороже</option>
						<option value="2">дешевле</option>
					</select>
				</div>
			</div>
		);
	}
}

export default ControlPanel;