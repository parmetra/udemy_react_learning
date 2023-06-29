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
				{name: "Иван К.", salary: 800, increase: false, rise: true, id: 1},
				{name: "Денис С.", salary: 950, increase: true, rise: false, id: 2},
				{name: "Пётр Б.", salary: 1150, increase: false, rise: false, id: 3}
			],
			term: '',
			filter: 'all'
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
			rise: false,
			id: this.maxID++
		}
		this.setState(({data}) => {
			const resultArr = [...data, newItem]
			return {
				data: resultArr
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	/* onToggleIncrease = (id) => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);
		// 	const oldItem = data[index];
		// 	const newItem = {...oldItem, increase: !oldItem.increase};
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

		// 	return {
		// 		data: newArr
		// 	}

		this.setState(({data}) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {...item, increase: !item.increase}
				}
				return item;
			})
		}))
	} */

	/* onToggleRise = (id) => {
		this.setState(({data}) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {...item, rise: !item.rise}
				}
				return item;
			})
		}))
	} */

	searchEmp = (items, term) => {
		if (term.length === 0) return items;

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term: term});
	}

	filterEmp = (items, filter) => {
		switch(filter) {
			case "rise":
				return items.filter(item => item.rise);
			case "more1000":
				return items.filter(item => item.salary > 1000);
			default:
				return items;

		}
	}

	onFilterEmp = (filter) => {
		this.setState({filter});
	}

	onChangeSalary = (id, salary) => {
		this.setState(({data}) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {...item, salary: parseInt(salary)}
				}
				return item;
			})
		}))
	}

	render() {
		const {data, term, filter} = this.state;
		const employers = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, term), filter); // Двойная фильтрация

		return (
			<div className="app">
				<AppInfo
					employers={employers}
					increased={increased}
				/>
	
				<div className="search-panel">
					<SearchPanel 
						onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterEmp={this.onFilterEmp}/>
				</div>
	
				<EmployerList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}
					/>
				<EmployersFormAdd
					onAddNewPerson={this.addNewPerson}/>
			</div>
		);
	}
}

export default App;