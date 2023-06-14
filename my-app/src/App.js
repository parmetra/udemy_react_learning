import {Component} from 'react';
import './App.css';

function WhoAmI ({name, surname, link}) {
	return (
		<div>
			{/* <h1>My name is {name}, surname - {surname}</h1> */}
			{/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
			<h1>My name is {name()}, surname - {surname}</h1>
			<a href={link}>My site</a>
		</div>
	)
}

function App() {
  return (
    <div className="App">
		{/* <WhoAmI name="John" surname="Smith" link="ya.ru"/>
		<WhoAmI name="Alex" surname="Johns" link="mail.ru"/> */}
		{/* <WhoAmI name={{firstName: "Igor"}} surname="Rabbit" link="mail.ru"/> */}
		<WhoAmI name={() => {return "Sam"}} surname="Samow" link="mail.ru"/>
    </div>
  );
}


export default App;
