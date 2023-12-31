import EmployerListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployerList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			// <EmployerListItem name={item.name} salary={item.salary}/>
			<EmployerListItem
				key={id} 
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)}
				/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployerList;