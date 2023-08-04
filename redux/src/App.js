import {legacy_createStore as createStore} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";




function App() {
	const initialState = {
		value: 0,
		
	};

	const reducer = (state = initialState, action) => {
		switch(action.type) {
			case "INC":
				return {
					...state, 
					value: state.value + 1
				}
			case "DEC":
				return {
					...state, 
					value: state.value - 1
				}
			case "X5":
				return {
					...state, 
					value: state.value * 5
				}
			case "RND":
				return {
					...state, 
					value: state.value * action.payload
				}
			default:
				return state;
		}
	};

	const store = createStore(reducer);
	
	const update = () => {
		document.querySelector("#counter").textContent = store.getState().value;
	}

	
	const dec = () => ({type: "DEC"});
	const inc = () => ({type: "INC"});
	const x5 = () => ({type: "X5"});
	const rnd = (value) => ({type: "RND", payload: value});

	store.subscribe(update);


	return (
		<div className="App">
			<h1 id="counter">0</h1>
			<div className="btns">
				<button 
					id="dec" 
					class="btn btn-primary" 
					onClick={() => {store.dispatch(dec())}}
				>
					Minus
				</button>
				<button 
					id="inc" 
					class="btn btn-primary" 
					onClick={() => {store.dispatch(inc())}}
				>
					Plus
				</button>
				<button 
					id="x5" 
					class="btn btn-primary" 
					onClick={() => {store.dispatch(x5())}}
				>
					x5
				</button>
				<button 
					id="rnd" 
					class="btn btn-primary" 
					onClick={() => {
										const value = Math.floor(Math.random() * 10)
										store.dispatch(rnd(value))
									}}
				>
					RND
				</button>
			</div>
		</div>
	);
}

export default App;
