import { Component, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MarverService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './charList.scss';

const CharList = (props) => {
	const [charachters, setCharachters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [countItems, setCountItems] = useState(450);
	const [charEnded, setCharEnded] = useState(false);

	const marvelService = new MarverService();

	useEffect(() => {
		renderCharachters();
	}, []);


	// componentWillUnmount() {
		// window.removeEventListener("scroll", this.onScroll);
	// }

/*     onScroll = () => {
		if (this.state.newItemLoading) return;
		
		if (this.state.charEnded) {
			window.removeEventListener("scroll", this.onScroll);
		}
		
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
			
			this.onCharachtersLoading();
			this.renderCharachters(this.state.countItems);
		}
	} */

	const renderCharachters = (offset) => {
		onCharachtersLoading();
		marvelService
			.getAllCharachters(offset)
			.then(onCharachtersLoaded)
			.catch(onError)
	}

	const onCharachtersLoading = () => {
		setNewItemLoading(true);
	}

	const onCharachtersLoaded = (newCharachters) => {
		let ended = false;
		if (newCharachters.length < 9) {
			ended = true;
		}

		setCharachters(charachters => [...charachters, ...newCharachters]);
		setLoading(false);
		setNewItemLoading(false);
		setCountItems(countItems => countItems + 9);
		setCharEnded(ended);

	}

	const addMoreCharachters = () => {
		setLoading(true);
		renderCharachters();
	}

	const onError = () => {
		setError(true);
		setLoading(false);
	}

	// Объявление ref'а
	let focusRef = useRef(null);
	// Создание ref'а через callback
	const setRef = (element) => {
		focusRef = element;
	}

	const focusOnRef = (e) => {
		if (focusRef.current) {
			focusRef.classList.remove("char__item_selected");
		}
		setRef(e.currentTarget);
		focusRef.classList.add("char__item_selected");
	}

	
	const renderItems = (array) => {
		const items = array.map((item, i) => {
			const {name, thumbnail, id} = item;
			const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
			return (
				<li
					tabIndex={0}
					className="char__item" 
					key={id}
					onClick={
							(e) => {
									props.onCharSelected(item.id);
									focusOnRef(e);
									}
							}
					onKeyDown={
						(e) => {
							if (e.code === "Enter" || e.code === "Space") {
								e.preventDefault();
								props.onCharSelected(item.id);
								focusOnRef(e);
							}
						}
					}
				>
					<img src={thumbnail} alt={name} style={{objectFit: objectFitProperty}}/>
					<div className="char__name">{name}</div>
				</li>
			)
		});
		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}
	

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error) ? renderItems(charachters) : null;
	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{content}
			<button className="button button__main button__long" 
				id='loadMoreBtn'
				disabled={newItemLoading}
				style={{"display": charEnded ? "none" : "block"}}
				onClick={() => renderCharachters(countItems)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
	
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default CharList;