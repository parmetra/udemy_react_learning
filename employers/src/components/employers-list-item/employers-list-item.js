import {Component} from "react";
import className from "../../../node_modules/classnames/";
import "./employers-list-item.css";

class EmployersListItem extends Component {	

	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			isLike: false
		}
	}

	onIncrease = () => {
		this.setState(({increase}) => ({
			increase: !increase
		}))
	}

	addLike = () => {
		this.setState(({isLike}) => ({
			isLike: !isLike
		}))
	}

	render () {
		const {name, salary, onDelete} = this.props;
		const {increase, isLike} = this.state;

		let nameOfClassList = "list-group-item d-flex justify-content-between";
		if (increase) {
			nameOfClassList = className(nameOfClassList, "increase");
		}
		if (isLike) {
			nameOfClassList = className(nameOfClassList, "like");
		}
	
		return (
			<li className={nameOfClassList}>
				<span className="list-group-item-label" onClick={this.addLike}>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm" onClick={this.onIncrease}>
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
}}

export default EmployersListItem;