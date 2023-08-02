import { Component, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group'; 

import useMarverService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './charList.scss';

const CharList = (props) => {
	const [charachters, setCharachters] = useState([]);

	// Отвечает за подгрузку новых персонажей
	const [newItemLoading, setNewItemLoading] = useState(false);

	const [countItems, setCountItems] = useState(450);
	const [charEnded, setCharEnded] = useState(false);

	const {loading, error, getAllCharachters} = useMarverService();

	useEffect(() => {
		renderCharachters(countItems, true);
	}, []);


	const renderCharachters = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);		
		getAllCharachters(offset)
			.then(onCharachtersLoaded)
	}


	const onCharachtersLoaded = (newCharachters) => {
		let ended = false;
		if (newCharachters.length < 9) {
			ended = true;
		}

		setCharachters(charachters => [...charachters, ...newCharachters]);
		setNewItemLoading(false);
		setCountItems(countItems => countItems + 9);
		setCharEnded(ended);

	}

	// Объявление ref'а
	let focusRef = useRef(null);
	// Создание ref'а через callback
	const setRef = (element) => {
		focusRef.current = element;
	}

	const focusOnRef = (e) => {
		if (focusRef.current) {
			focusRef.current.classList.remove("char__item_selected");
		}

		setRef(e.currentTarget);

		focusRef.current.classList.add("char__item_selected");
	}

	
	const renderItems = (array) => {
		const items = array.map((item, i) => {
			const {name, thumbnail, id} = item;
			const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
			return (
				<CSSTransition
					timeout={10000}
					key={id}
					classNames="char__item"
				>
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
				</CSSTransition>
			)
		});
		return (
			<ul className="char__grid">
				<TransitionGroup component={null}>
					{items}
				</TransitionGroup>
			</ul>
		)
	}
	
	const items = renderItems(charachters);
	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;
	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{items}
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