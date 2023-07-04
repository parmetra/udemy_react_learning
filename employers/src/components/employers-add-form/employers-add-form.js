import {Component} from "react";

// import "./employers-add-form.css";
import "./employers-add-form.scss";

class EmployersFormAdd extends Component {
	// Не нужно использовать constructor и this перед state
	state = {
		name: "",
		salary: "",
		btnDisabled: true
	}
	
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		}, () => {
			const regExp = /^[А-Я][а-я]+\s[А-Я]\.$/g;			
		
			if (regExp.test(this.state.name) && this.state.name.length > 1 && this.state.salary >= 1) {
				this.setState({
					btnDisabled: false
				})
			} else {
				this.setState({
					btnDisabled: true
				})
			}
		});
	}

	onAddNewPerson = (e) => {
		e.preventDefault();
		this.props.onAddNewPerson(this.state.name, this.state.salary);
		this.setState({
			name: "",
			salary: "",
			btnDisabled: true
		})
	}

	static onLog = () => {
		console.log('Hey');
	}

	static logged = 'on';

	render() {
		const {name, salary, btnDisabled} = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?" 
						name="name"
						value={name}
						onChange={this.onValueChange}/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>
	
					<button type="submit"
							className="btn btn-outline-light" 
							onClick={this.onAddNewPerson}
							disabled={btnDisabled}>Добавить</button>
				</form>
			</div>
		)
	}
}

// EmployersFormAdd.onValueChange(); /* Будет ошибка */
EmployersFormAdd.onLog();			 /* Отработает */
console.log(EmployersFormAdd.logged);/* Отработает */

export default EmployersFormAdd;