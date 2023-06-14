import EmployerListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployerList = ({data}) => {

	const elements = data.map(item => {
		return (
			// <EmployerListItem name={item.name} salary={item.salary}/>
			<EmployerListItem {...item}/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployerList;