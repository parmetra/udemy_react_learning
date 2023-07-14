import React, {Component} from 'react';
import styled from 'styled-components';

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

function App() {
  return (
    <Wrapper>
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


export default App;
