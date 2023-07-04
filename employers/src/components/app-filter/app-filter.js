import "./app-filter.css";

const AppFilter = (props) => {	
	const buttonsData = [
		{
			name: "all", 
			label: "Все сотрудники",
			colored: false
		},
		{
			name: "rise", 
			label: "Сотрудники на повышение",
			colored: true
		},
		{
			name: "more1000", 
			label: "З/П больше 1000$",
			colored: false
		}
	];

	const buttons = buttonsData.map(({name, label, colored}) => {
		const active = props.filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light";
		const redColor = colored ? {color: 'red'} : null;
		return (
			<button className={`btn ${clazz}`}
					type="button"
					key={name}
					onClick={() => props.onFilterEmp(name)}
					style={redColor}>
					{label}
			</button>
		)
	});
	console.log(buttons);
	return (

		<div className="btn-group">
			{buttons}
		</div>
	);
}

export default AppFilter;