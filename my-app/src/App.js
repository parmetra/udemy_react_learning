import {Component} from 'react';
import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: "some text"
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	render() {
		const {name, surname, link} = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h2>My name is {name}, surname - {surname}, my age - {this.state.years}</h2>
				<a href={link}>My site</a>
			</div>
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
