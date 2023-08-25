import { useEffect } from 'react';
import classNames from "classnames";
import { useSelector, useDispatch } from 'react-redux';
import { filterChanging, fetchFilters, selectAll } from './filterSlice';
import Spinner from '../spinner/Spinner';
import store from '../../store';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
	

    const {filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const filters = selectAll(store.getState());

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchFilters());

		// eslint-disable-next-line
	}, []);

    

    if (filtersLoadingStatus === "loading") return <Spinner/>
    else if (filtersLoadingStatus === "error") return <h5 style={{textAlign: 'center', marginTop: 20}}>Ошибка при загрузке...</h5>

    const renderBtns = (filters) => {
        if (filters && filters.length > 0) {
            return filters.map(item => {
                return <button
                            key={item.eng} 
                            className={classNames('btn', item.class, activeFilter === item.eng ? "active" : null)}
                            onClick={() => dispatch(filterChanging(item.eng))}
                        >
                            {item.rus}
                        </button>
            })
        }
    }

    const elements = renderBtns(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;