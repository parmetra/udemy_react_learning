import EmployerListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployerList = ({data, onDelete}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			// <EmployerListItem name={item.name} salary={item.salary}/>
			<EmployerListItem
				key={id} 
				{...itemProps}
				onDelete={() => onDelete(id)}/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployerList;