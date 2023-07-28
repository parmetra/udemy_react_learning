import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { Transition, CSSTransition } from 'react-transition-group';

import './App.css';

//Transition
/* 
const Modal = (props) => {

	const duration = 500;

	const defaultStyle = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		visibility: `hidden`
	}

	const transitionStyles = {
		entering: { opacity: 1, visibility: `visible` },
		entered:  { opacity: 1, visibility: `visible` },
		exiting:  { opacity: 0, visibility: `hidden` },
		exited:   { opacity: 0, visibility: `hidden` },
	};

	return (
		<Transition 
			in={props.showModal} 
			timeout={duration} 
			unmountOnExit 
			onEntering={() => props.setShowBtn(false)} 
			onExited={() => props.setShowBtn(true)}
		>
			{state => (
				<div 
					className="modal mt-5 d-block" 
					style={{
						...defaultStyle,
						...transitionStyles[state]
					}}
				>
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Typical modal window</h5>
							<button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p>Modal body content</p>
						</div>
						<div className="modal-footer">
							<button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
							<button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
						</div>
						</div>
					</div>
				</div>
			)}
		</Transition>
	)
}

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showBtn, setShowBtn] = useState(true);

	return (
		<Container>
			<Modal onClose={setShowModal} showModal={showModal} setShowBtn={setShowBtn} />
			{showBtn ? <button 
				type="button" 
				className="btn btn-warning mt-5"
				onClick={() => setShowModal(true)}>Open Modal</button> : null}
		</Container>
	);
}
 */

//CSSTransition
const Modal = (props) => {

	const duration = 500;

	return (
		<CSSTransition 
			in={props.showModal} 
			timeout={duration} 
			unmountOnExit 
			onEntering={() => props.setShowBtn(false)} 
			onExited={() => props.setShowBtn(true)}
			classNames="modal"
		>
			<div 
				className="modal mt-5 d-block" 
			>
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Typical modal window</h5>
						<button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>Modal body content</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
						<button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
					</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showBtn, setShowBtn] = useState(true);

	return (
		<Container>
			<Modal onClose={setShowModal} showModal={showModal} setShowBtn={setShowBtn} />
			{showBtn ? <button 
				type="button" 
				className="btn btn-warning mt-5"
				onClick={() => setShowModal(true)}>Open Modal</button> : null}
		</Container>
	);
}

export default App;
