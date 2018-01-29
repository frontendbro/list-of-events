import React from 'react';
import './index.css';

function ControlPanel({inputChange, selectChange}) {
	return (
		<div className='control-panel'>
			<div className='control-wrap'>
				<span className='control-wrap__label'>Поиск: </span>
				<input className='control-wrap__input' type="text" onChange={inputChange}/>
			</div>
			<div className='control-wrap'>
				<span className='control-wrap__label'>Сортировка по типу: </span>
				<select name="" id="" onChange={selectChange}>
					<option value="all">all</option>
					<option value="concert">concert</option>
					<option value="exhibition">exhibition</option>
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

export default ControlPanel;