import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployerList from "../employers-list/employers-list";
import EmployersFormAdd from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: "Иван К.", salary: 800, increase: false, id: 1},
				{name: "Денис С.", salary: 950, increase: false, id: 2},
				{name: "Пётр Б.", salary: 1150, increase: false, id: 3}
			],
		}
		this.maxID = 4
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			/*const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const result = [...before, ...after]; */
			const result = data.filter(item => item.id !== id)

			return {
				data: result
			}
		})
	}

	addNewPerson = (person, salary) => {
		const newItem = {
			name: person,
			salary: salary,
			increase: false, 
			id: this.maxID++
		}
		this.setState(({data}) => {
			const resultArr = [...data, newItem]
			return {
				data: resultArr
			}
		})
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
	
				<EmployerList 
					data={this.state.data}
					onDelete={this.deleteItem}/>
				<EmployersFormAdd
					onAddNewPerson={this.addNewPerson}/>
			</div>
		);
	}
}

export default App;