import {Component} from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello!</h2>;
};

const FieldVar = () => {
	const holder = "Enter here...";
	const styleField = {
		width: "300px",
		height: "80px"
	};
	return <input 
			placeholder={holder} 
			type="text" 
			style={styleField}/>
}

class Field extends Component {
	render() {
		const holder = "Enter here...";
		const styleField = {
			width: "300px",
			height: "10px"
		};

		return <input 
			placeholder={holder} 
			type="text" 
			style={styleField}/>
	}
}

function Btn() {
	const text = "Login";
	const logged = false;
	/* const res = () => {
		return "LOGIN";
	}
	const p = <p>Log in</p> */
	return <button>{logged ? 'Enter' : text}</button>; // тернарный оператор разрешён в фигурных скобках, а обычный if / else - не сработает
}

function App() {
  return (
    <div className="App">
		<Header/>
		<Field/>
		<Btn/>
    </div>
  );
}

export {Header};
export default App;
