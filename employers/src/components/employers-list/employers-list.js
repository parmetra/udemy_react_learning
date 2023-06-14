import EmployerListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployerList = () => {
	return (
		<ul className="app-list list-group">
			<EmployerListItem/>
			<EmployerListItem/>
			<EmployerListItem/>
		</ul>
	)
}

export default EmployerList;