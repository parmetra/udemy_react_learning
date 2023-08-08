import { useEffect } from 'react';
import classNames from "classnames";
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { filterFetched, filterFetching, filterFetchingError, filterChanging } from '../../actions';
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const {request} = useHttp();
	const dispatch = useDispatch();

    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);

    useEffect(() => {
		dispatch(filterFetching());
		request("http://localhost:3001/filters")
			.then(data => dispatch(filterFetched(data)))
			.catch(() => dispatch(filterFetchingError()))


		// eslint-disable-next-line
	}, []);

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

    if (filtersLoadingStatus === "loading") return <Spinner/>
    else if (filtersLoadingStatus === "error") return <h5 style={{textAlign: 'center', marginTop: 20}}>Ошибка при загрузке...</h5>

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