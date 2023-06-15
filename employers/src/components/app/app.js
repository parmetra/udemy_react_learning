import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployerList from "../employers-list/employers-list";
import EmployersFormAdd from "../employers-add-form/employers-add-form";
import "./app.css";

function App() {

	const data = [
		{name: "Иван К.", salary: 800, increase: false, id: 1},
		{name: "Денис С.", salary: 950, increase: false, id: 2},
		{name: "Пётр Б.", salary: 1150, increase: false, id: 3}
	];

	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployerList data={data}/>
			<EmployersFormAdd/>
		</div>
	);
}

export default App;