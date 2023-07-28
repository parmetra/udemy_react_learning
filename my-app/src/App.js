import React, {Component, useRef, useState, useEffect, memo, PureComponent, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

import BootstrapTest from './BootstrapTest';
import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
	a {
		display: block;
		margin: 1px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;
const Header = styled.h2`
	font-size: 22px;
`;
export const Button = styled.button`
	display: block;
	padding: 10px;
	background-color: orange;
	border: 1px solid black;
	box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`;
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
			<EmpItem active>
				<Button onClick={() => this.nextYear()}>{text}</Button>
				<Header>My name is {name}, 
					surname - {surname}, 
					my age - {years}, 
					должность - {position}</Header>
				<a href={link}>My site</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
				</form>
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 800px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating =(props) => {
	return (
		<div className={"mb-3 p-3 border border-" + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: "shadow p-3 m-3 border rounded"})
				})
			}
		</div>
	)
}

const HelloGreating = () => {
	return (
		<div style={{"width": "500px", "margin": "0 auto"}}>
			<DynamicGreating color={"primary"}>
				<h2>Hello!</h2>
			</DynamicGreating>
		</div>
	)
}

const Message = (props) => {
	return (
		<h2>The counter is {props.counter}</h2>
	)
}

class Counter extends Component {
	state = {
		counter: 0
	}

	changeCounter = () => {
		this.setState(({counter}) => {
			return {counter: counter + 1}
		})
	}

	render() {
		return (
			<>
				<button 
					className={"btn btn-primary"}
					onClick={this.changeCounter}>
					Click
				</button>
				{this.props.render(this.state.counter)}
			</>
		)
	}

}

// Создание хука
function useInputWithValidate(initVal) {
	const [value, setValue] = useState(initVal);

	const onChange = e => {
		setValue(e.target.value);
	};

	const validateInput = () => {
		return (value.search(/\d/) >= 0)
	};

	return {value: value, onChange: onChange, validateInput: validateInput};
}


/* function propsCompare(prevProps, nextProps) {
	return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
} */

/* const Form = memo((props) => {
	const input = useInputWithValidate("");
	const textArea = useInputWithValidate("");

	const color = input.validateInput() ? 'text-danger' : 'null';

	console.log("render");

	return (
		<Container>
			<form 
				// onClick={focusInput} 
				className="w-50 border mt-5 p-3 m-auto" 
				style={{position: "relative", overflow: "hidden"}}
			>
				<div className="mb-3">
					<input value={`${input.value} // ${textArea.value}`} type='text' className='form-control' readOnly/>
					<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
					<input 
						onChange={input.onChange}
						type="email"
						value={props.mail.name}
						className={`form-control ${color}`}
						id="exampleFormControlInput1" 
						placeholder="name@example.com"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
					<textarea 
						className="form-control" 
						id="exampleFormControlTextarea1" 
						rows="3"
						onChange={textArea.onChange}
						value={props.text}
					></textarea>
				</div>
			</form>
		</Container>
	)
}, propsCompare) */

const dataContext = createContext({
	mail: 'ali@mail.ru',
	text: 'Some Text...'
});

const {Provider, Consumer} = dataContext;
class Form extends Component {
	/* shouldComponentUpdate(nextProps) {
		if (this.props.mail.name === nextProps.mail.name) {
			return false;
		} return true;
	}; */
	render() {
		console.log("render");
		return (
			<Container>
				<form 
					className="w-50 border mt-5 p-3 m-auto" 
					style={{position: "relative", overflow: "hidden"}}
				>
					<div className="mb-3">
						<input type='text' className='form-control' readOnly/>
						<label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
						<InputComponent/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
						<textarea 
							className="form-control" 
							id="exampleFormControlTextarea1" 
							rows="3"
							value={this.props.text}
						></textarea>
					</div>
				</form>
			</Container>
		)
	}
}


const Portal = (props) => {
	const node = document.createElement("div");
	document.body.append(node);
	return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
	return (
		<div
			style={{width: 500, height: 150, backgroundColor: "red", position: "absolute", right: 0, bottom: "10%"}}>
			Some Text
		</div>
	)
}

function App() {
	const [data, setData] = useState({
		mail: 'first@mail.ru',
		text: 'Some Text...',
		foreceChangeMail: foreceChangeMail
	})

	function foreceChangeMail () {
		setData({...data, mail: 'newMail@sobaka.com'})
	}
  return (
    <Wrapper>

		<Provider value={data}>
			<Form text={data.text}/>
			<button 
				className={"btn btn-secondary"}
				onClick={() => setData({
					mail: 'second@mail.ru',
					text: 'One more Some Text...',
					foreceChangeMail: foreceChangeMail
				})}
				value='Click me'
			>
				Click
			</button>
			<br/>
			<br/>
			<br/>
		</Provider>

		<Counter render={counter => (
			<Message counter={counter}/>
		)}/>

		<DynamicGreating color={"primary"}>
			<h2>This is good!</h2>
			<h2>This is not good...</h2>
		</DynamicGreating>

		<HelloGreating/>

		<BootstrapTest
			left = {
				<DynamicGreating color={"primary"}>
					<h3>This is left side!</h3>
				</DynamicGreating>
			}
			right = {
				<DynamicGreating color={"second"}>
					<h3>It's right side!</h3>
				</DynamicGreating>
			}
		/>

		<WhoAmI name="Sam" surname="Samow" link="mail.ru"/>
		<WhoAmI name="John" surname="Smith" link="ya.ru"/>
    </Wrapper>
  );
}

/* class InputComponent extends Component {
	static contextType = dataContext;
	render() {
		return (
			// <Consumer>
			// 	{
			// 		value => {
			// 			return (
			// 				<input value={value.mail} 
			// 				type='email' 
			// 				className='form-control' 
			// 				placeholder='yourMail@gmail.com'/>
			// 			)
			// 		}
			// 	}
			// </Consumer>

			<input 
				value={this.context.mail} 
				type='email' 
				className='form-control' 
				placeholder='yourMail@gmail.com'/>
		)
	}
} */

const InputComponent = () => {

	const context = useContext(dataContext);

	return (
		<input 
			value={context.mail} 
			type='email' 
			className='form-control' 
			placeholder='yourMail@gmail.com'
			onFocus={context.foreceChangeMail}/>
	)
}



export default App;
