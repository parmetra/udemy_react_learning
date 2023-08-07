import { connect } from "react-redux";
import {inc, dec, x5, rnd} from "../actions";
// import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return(
		<div className="App">
			<h1 id="counter">{counter}</h1>
			<div className="btns">
				<button 
					id="dec" 
					className="btn btn-primary" 
					onClick={() => dispatch(dec())}
				>
					Minus
				</button>
				<button 
					id="inc" 
					className="btn btn-primary" 
					onClick={() => dispatch(inc())}
				>
					Plus
				</button>
				<button 
					id="x5" 
					className="btn btn-primary"
					onClick={() => dispatch(x5())}
				>
					x5
				</button>
				<button 
					id="rnd" 
					className="btn btn-primary" 
					onClick={() => dispatch(rnd())}
				>
					RND
				</button>
			</div>
		</div>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter
// 	}
// }

/* const mapDispatchToProps = (dispatch) => {
	const {inc, dec, x5, rnd} = bindActionCreators(actions, dispatch);
	return {
		inc: inc,
		dec: dec,
		x5: x5,
		rnd: rnd
	}
} */

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;