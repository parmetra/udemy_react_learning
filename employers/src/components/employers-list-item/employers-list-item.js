
import className from "../../../node_modules/classnames/";
import "./employers-list-item.css";

const EmployersListItem = (props) => {	

	const {name, salary, onDelete, onToggleProp, onChangeSalary, increase, rise} = props;

	let nameOfClassList = "list-group-item d-flex justify-content-between";
	if (increase) {
		nameOfClassList = className(nameOfClassList, "increase");
	}
	if (rise) {
		nameOfClassList = className(nameOfClassList, "like");
	}

	return (
		<li className={nameOfClassList}>
			<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
			<input type="text" className="list-group-item-input" onChange={onChangeSalary} defaultValue={salary + "$"}/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="increase">
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
						className="btn-trash btn-sm "
						onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

export default EmployersListItem;