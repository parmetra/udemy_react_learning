import {legacy_createStore as createStore, bindActionCreators} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import reducer from "./reducer";
import * as actions from  "./actions";


function App() {

	const store = createStore(reducer);

	const {dispatch, subscribe, getState} = store;

	// const bindActionCreator = (creator, dispatch) => (...args) => {
	// 	dispatch(creator(...args));
	// }

	// const incDispatch = bindActionCreator(inc, dispatch);
	// const decDispatch = bindActionCreator(dec, dispatch);
	// const x5Dispatch = bindActionCreator(x5, dispatch);
	// const rndDispatch = bindActionCreator(rnd, dispatch);



	const {inc, dec, x5, rnd} = bindActionCreators(actions, dispatch);
	// const decDispatch = bindActionCreators(dec, dispatch);
	// const x5Dispatch = bindActionCreators(x5, dispatch);
	// const rndDispatch = bindActionCreators(rnd, dispatch);

	
	const update = () => {
		document.querySelector("#counter").textContent = getState().value;
	}
	
	subscribe(update);

	return (
		<div className="App">
			<h1 id="counter">0</h1>
			<div className="btns">
				<button 
					id="dec" 
					className="btn btn-primary" 
					onClick={dec}
				>
					Minus
				</button>
				<button 
					id="inc" 
					className="btn btn-primary" 
					onClick={inc}
				>
					Plus
				</button>
				<button 
					id="x5" 
					className="btn btn-primary"
					onClick={x5}
				>
					x5
				</button>
				<button 
					id="rnd" 
					className="btn btn-primary" 
					onClick={() => {
						const value = Math.floor(Math.random() * 10);
						rnd(value);
					}}
				>
					RND
				</button>
			</div>
		</div>
	);
}

export default App;
