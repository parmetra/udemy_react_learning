import {Component, useState, useEffect, useCallback, useMemo, useReducer} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
/* class Slider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			autoplay: false,
			slide: 0
		}
	}

	changeSlide = (i) => {
		this.setState(({slide}) => ({
			slide: slide + i
		}))
	}

	toggleAutoplay = () => {
		this.setState(({autoplay}) => ({
			autoplay: !autoplay
		}))
	}

	render() {
		return (
			<Container>
				<div className="slider w-50 m-auto">
					<img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
					<div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
					<div className="buttons mt-3">
						<button 
							className="btn btn-primary me-2"
							onClick={() => this.changeSlide(-1)}>-1</button>
						<button 
							className="btn btn-primary me-2"
							onClick={() => this.changeSlide(1)}>+1</button>
						<button 
							className="btn btn-primary me-2"
							onClick={this.toggleAutoplay}>toggle autoplay</button>
					</div>
				</div>
			</Container>
		)
	}
} */

const calcValue = () => {
	console.log("random");

	return Math.random() * (50 - 1) + 1;
}

const countTotal = (num) => {
	console.log("counting");
	return num + 10;
}

function reducer (state, action) {
	switch(action.type) {
		case 'toggle':
			return {autoplay: !state.autoplay};
		case 'slow':
			return {autoplay: 300};
		case 'fast':
			return {autoplay: 100};
		case 'custom':
			return {autoplay: action.payload};
		default:
			throw new Error();
	}
}

function init(initial) {
	return {autoplay: initial}
}

const Slider = (props) => {
	
	// const [slide, setSlide] = useState(() => calcValue());
	const [slide, setSlide] = useState(0);
	// const [autoplay, setAutoplay] = useState(false);
	const [autoplay, dispatchAutoPlay] = useReducer(reducer, props.initial, init);

	const getSomeImages = useCallback(() => {
		console.log("fetching");
		return [
			"https://wallbox.ru/resize/800x480/wallpapers/main/201617/785b7a5776d626f.jpg",
			"https://img2.goodfon.ru/original/640x480/c/bf/usa-massachusetts-boston-city-5555.jpg"
		]
	}, []);
	
	function changeSlide (i) {
		setSlide(slide => slide + i)
	}

	/* function toggleAutoplay() {
		setAutoplay(autoplay => !autoplay)
	} */

	// Альтернативный вариант
	// const [state, seState] = useState({slide: 0, autoplay: false});

	// function changeSlide (i) {
	// 	seState(state => ({...state, slide: state.slide + i}))
	// }

	// function toggleAutoplay() {
	// 	seState(state => ({...state, autoplay: !state.autoplay}))
	// }


	function logging() {
		console.log('log');
	}

	// Эффекты
	useEffect(() => {
		document.title = `Slide: ${slide}`;

		// Подписка на обработчик событий
		window.addEventListener("click", logging);

		// Отписка от обработчика событий
		return () => {
		window.removeEventListener("click", logging);
		}

	}, [slide]);
	// Второй аргумент - массив зависимостей. То есть когда значения в массиве изменяются, useEffect срабатывает. Если массив будет пустым, это аналог componentDidUpdate, который срабатывает в первый раз при загрузке страниц. Можно использовать много useEffect для каждого действия

	useEffect(() => {
		console.log('auotplay changed');
	}, [autoplay]);



	// const total = countTotal(slide);
	const total = useMemo(() => {
		return countTotal(slide)
	}, [slide]);

	const style = useMemo(() => {
		return {color: slide > 4 ? "red" : "yellow"}
	}, [slide]);

	useEffect(() => {
		console.log("style was changed");
	}, [style]);

	return (
		<Container>
			<div className="slider w-50 m-auto">
				<Slide getSomeImages={getSomeImages}/>

				<div className="text-center mt-5">Active slide {slide} <br/> {autoplay.autoplay ? String(autoplay.autoplay) : null}</div>
				<div style={style} className="text-center mt-5">Total: {total}</div>
				<div className="buttons mt-3">
					<button 
						className="btn btn-primary me-2"
						onClick={() => changeSlide(-1)}>-1</button>
					<button 
						className="btn btn-primary me-2"
						onClick={() => changeSlide(1)}>+1</button>
					<button 
						className="btn btn-primary me-2"
						onClick={() => dispatchAutoPlay({type: 'toggle'})}>toggle autoplay</button>
					<button 
						className="btn btn-primary me-2"
						onClick={() => dispatchAutoPlay({type: 'slow'})}>slow autoplay</button>
					<button 
						className="btn btn-primary me-2"
						onClick={() => dispatchAutoPlay({type: 'fast'})}>fast autoplay</button>
					<button 
						className="btn btn-primary me-2"
						onClick={(e) => dispatchAutoPlay({type: 'custom', payload: +e.target.textContent})}>1000</button>
				</div>
			</div>
		</Container>
	)
}

const Slide = ({getSomeImages}) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages(getSomeImages());
	}, [getSomeImages]);

	return (
		<>
			{images.map((url, i) => {
				return <img key={i} className="d-block w-100" src={url} alt="slide" />
			})}
		</>
	)
}


function App() {
	const [slider, setSlider] = useState(true);
	return (
		<>
			<button onClick={() => setSlider(!slider)}>Click!</button>
			{slider ? <Slider initial={false}/> : null}
		</>
	);
}

export default App;
