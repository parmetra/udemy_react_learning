import "./search.sass";
const Search = (props) => {
	
	// Получаем все страны
	let countryArray = props.data.data.map(item => {
		return item.country;
	})
	// Перезаписываем в массив только уникальные страны и сортируем функцией .sort()
	countryArray = [...new Set(countryArray)].sort();
	
	const buttons = countryArray.map(item => {
		const active = props.data.filter === item;
		const clazz = active ? "filter-btn filter-btn_active" : "filter-btn";
		return (
			<button className={`${clazz}`}
					type="button"
					key={item}
					children={item}
					onClick={() => props.onFilterCountry(item)}
			>
			</button>
		)
	});
	return(
		<div className="search-and-filter">
			<div className="search">
				<span className="search__title">Looking for</span>
				<input type="text" onChange={props.onChangeInputFilter}/>
			</div>
			<div className="filter">
				<span>Or filter</span>
				<div className="filter__btns">
					{buttons}
				</div>
			</div>
		</div>
	)
};

export default Search;