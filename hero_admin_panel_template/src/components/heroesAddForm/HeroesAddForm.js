import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { selectAll } from '../heroesFilters/filterSlice';
import store from '../../store';
import { useCreateHeroMutation } from '../../api/apiSlice';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
	const [name, setName] = useState('');
	const [descr, setDescr] = useState('');
	const [element, setElement] = useState('');

	const [createHero, {isLoading}] = useCreateHeroMutation();

	const filtersLoadingStatus = useSelector(state => state.filters.filtersLoadingStatus);
	const filters = selectAll(store.getState());

	const renderList = (list, status) => {
		if (status === "loading") {
			return <option disabled>Идёт загрузка...</option>
		} else if (status === "error") {
			return <option disabled>ОШИБКА!</option>
		} 

		if (filters && filters.length > 0) {
			return list.map(item => {
				if (item.eng === "all") return;

				return <option key={item.eng} value={item.eng}>{item.rus}</option>
			})
		}
	}

	const onSubmitForm = (e) => {
		e.preventDefault();
		
		const newHero = {
			"id": uuidv4(),
            "name": name,
            "description": descr,
            "element": element
		}

		createHero(newHero).unwrap();

		// Очищаем форму после отправки
		setName('');
		setDescr('');
		setElement('');
	}


	return (
		<form className="border p-4 shadow-lg rounded" onSubmit={onSubmitForm}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
				<input 
					onChange={(e) => setName(e.currentTarget.value)}
					value={name}
					required
					type="text" 
					name="name" 
					className="form-control" 
					id="name" 
					placeholder="Как меня зовут?"/>
			</div>

			<div className="mb-3">
				<label htmlFor="text" className="form-label fs-4">Описание</label>
				<textarea
					onChange={(e) => setDescr(e.currentTarget.value)}
					value={descr}
					required
					name="text" 
					className="form-control" 
					id="text" 
					placeholder="Что я умею?"
					style={{"height": '130px'}}/>
			</div>

			<div className="mb-3">
				<label htmlFor="element" className="form-label">Выбрать элемент героя</label>
				<select 
					required
					className="form-select" 
					id="element" 
					name="element"
					value={element}
					onChange={(e) => setElement(e.currentTarget.value)}>
						<option value="" disabled>Я владею элементом...</option>
						{renderList(filters, filtersLoadingStatus)}
				</select>
			</div>

			<button type="submit" className="btn btn-primary">Создать</button>
		</form>
	)
}

export default HeroesAddForm;