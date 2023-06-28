import {Component} from 'react';
import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: "some text",
			position: ""
		}
		// this.nextYear = this.nextYear.bind(this);
	}

	/* nextYear() {
		this.setState(state => ({
			years: state.years + 1
		}))
	} */

	nextYear() {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {position, years, text} = this.state;
		return (
			<>
				<button onClick={() => this.nextYear()}>{text}</button>
				<h2>My name is {name}, 
					surname - {surname}, 
					my age - {years}, 
					должность - {position}</h2>
				<a href={link}>My site</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
				</form>
			</>
		)
	}
}

function App() {
  return (
    <div className="App">
		<WhoAmI name="Sam" surname="Samow" link="mail.ru"/>
		<WhoAmI name="John" surname="Smith" link="ya.ru"/>
    </div>
  );
}


export default App;
