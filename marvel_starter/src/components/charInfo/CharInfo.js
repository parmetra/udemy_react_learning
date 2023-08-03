import { Component, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import setContent from '../../utils/setContent';
import useMarverService from '../../services/MarvelService';
import './charInfo.scss';

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const {getCharachter, clearError, process, setProcess} = useMarverService();

	// Вызов useEffect при первоначальном рендеринге не нужен, т.к. useEffect ниже выполняет ту же работу при рендере в первый раз, а затем каждый раз, когда props.charID изменяется
	/* useEffect(() => {
		updateChar();
	}, []); */

	useEffect(() => {
		updateChar();
	}, [props.charID]);

	const updateChar = () => {
		const {charID} = props;

		if (!charID) {
			return;
		}

		clearError();
		getCharachter(charID)
			.then(onCharLoaded)
			.then(() => setProcess("confirmed"));
	}

	const onCharLoaded = (char) => {
		setChar(char);
	}


	// const skeleton = char || loading || error ? null: <Skeleton/>
	// const errorMessage = error ? <ErrorMessage/> : null;
	// const spinner = loading ? <Spinner/> : null;
	// const content = !(loading || error || !char) ? <View charachter={char}/> : null;
	return (
		<div className="char__info">
			{setContent(process, View, char)}
		</div>
	)
	
}

const View = ({data}) => {
	const {thumbnail, name, homepage, wiki, description, comics} = data;
	const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
	return (
		<>
			<div className="char__basics">
					<img src={thumbnail} alt={name} style={{objectFit: objectFitProperty}}/>
					<div>
						<div className="char__info-name">{name}</div>
						<div className="char__btns">
							<a href={homepage} className="button button__main">
								<div className="inner">homepage</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="char__descr">
					{description}
				</div>
				<div className="char__comics">Comics:</div>
				<ul className="char__comics-list">
					{
						comics.length > 0 ? null : "Комиксы отсутствуют"
					}
					{
						comics.map((item, i) => {
							if (i > 9) return;
							// Мой вариант
							// const comicId = item.resourceURI.substring(43);
							// Вариант Артура. Спасибо ему!
							const comicId = item.resourceURI.split('/').pop();
							return (
								<li className="char__comics-item" key={i}>
									<Link to={`/comics/${comicId}`}>
										{item.name}
									</Link>
								</li>
							)
						})
					}
				</ul>
		</>
	)
}

CharInfo.propTypes = {
	charID: PropTypes.number
}

export default CharInfo;