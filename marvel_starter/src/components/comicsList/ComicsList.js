import { useState, useEffect, useRef } from 'react';
import useMarverService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = (props) => {
    const [offset, setOffset] = useState(10);
    const [comics, setComics] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarverService();

    useEffect(() => {
		renderComics(offset, true);
	}, []);


	const renderComics = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);		
		getAllComics(offset)
			.then(onComicsLoaded)
	}




    const onComicsLoaded = (newComics) => {
		let ended = false;
		if (newComics.length < 8) {
			ended = true;
		}

		setComics(charachters => [...comics, ...newComics]);
		setNewItemLoading(false);
		setOffset(countItems => countItems + 8);
		setComicsEnded(ended);
	}

    const renderItems = (array) => {
		const items = array.map((item, i) => {
			const {title, thumbnail, id, prices} = item;
			const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
			return (
				<li
                    style={{cursor: 'pointer'}}
					tabIndex={0}
					className="comics__item" 
					key={id}
					onClick={
							(e) => {
									props.onComicsSelected(item.id);
									}
							}
					onKeyDown={
						(e) => {
							if (e.code === "Enter" || e.code === "Space") {
								e.preventDefault();
								props.onComicsSelected(item.id);
							}
						}
					}
				>
					<img src={thumbnail} alt={title} className="comics__item-img" style={{objectFit: objectFitProperty}}/>
					<div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{prices}$</div>
				</li>
			)
		});
		return (
			<ul className="comics__grid">
				{items}
			</ul>
		)
	}

    const items = renderItems(comics);
	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const content = props.selectedComics ? null : items;
    return (
        <div className="comics__list">
			{errorMessage}
			{spinner}
			{content}
			<button className="button button__main button__long" 
				id='loadMoreBtn'
				disabled={newItemLoading}
				style={{"display": comicsEnded ? "none" : "block"}}
				onClick={() => renderComics(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
    )
}

export default ComicsList;