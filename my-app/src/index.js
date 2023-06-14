import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = "Hello, World!";
const elem = (
	<div>
		<h2 className='text'>Текст: {text}</h2>
		<input type="text" />
		<label htmlFor="text">123</label>
		<button tabIndex ={0}>Click</button>
	</div>
);
// const elem = React.createElement("h2", {className: "green"}, "Hello, World!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	elem,
	
);
