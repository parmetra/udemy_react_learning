import { useState, useEffect } from 'react';
import useMarverService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
	const [charachter, setCharachters] = useState({});

	const {getCharachter, clearError, process, setProcess} = useMarverService();

	useEffect(() => {
		updateChar();
	}, []);

	const onCharLoaded = (charachter) => {
		setCharachters(charachter);
	}

	const updateChar = () => {
		clearError();
		const id = Math.floor(Math.random() * (1011050 - 1010900) + 1010900);
		getCharachter(id)
			.then(onCharLoaded)
			.then(() => setProcess("confirmed"));
	}

	return (
		<div className="randomchar">
			{setContent(process, View, charachter)}
			<div className="randomchar__static">
				<p className="randomchar__title">
					Random character for today!<br/>
					Do you want to get to know him better?
				</p>
				<p className="randomchar__title">
					Or choose another one
				</p>
				<button className="button button__main" onClick={updateChar}>
					<div className="inner">try it</div>
				</button>
				<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
			</div>
		</div>
	)
    
}

const View = ({data}) => {

	const {name, description, thumbnail, homepage, wiki } = data;
	const clazz = thumbnail ? ("randomchar__img" + ((thumbnail.includes("image_not_available") || thumbnail.includes("4c002e0305708")) ? " image_not_available" : "")) : null;

	return (
		<div className="randomchar__block">
			<img src={thumbnail} alt="Random character" className={clazz}/>
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">{description}</p>
				<div className="randomchar__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	)
}
export default RandomChar;