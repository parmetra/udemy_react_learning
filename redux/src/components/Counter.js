import { connect } from "react-redux";
import * as actions from "../actions";
// import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, x5, rnd}) => {
	return(
		<div className="App">
			<h1 id="counter">{counter}</h1>
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
					onClick={rnd}
				>
					RND
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state.value
	}
}

/* const mapDispatchToProps = (dispatch) => {
	const {inc, dec, x5, rnd} = bindActionCreators(actions, dispatch);
	return {
		inc: inc,
		dec: dec,
		x5: x5,
		rnd: rnd
	}
} */

export default connect(mapStateToProps, actions)(Counter);