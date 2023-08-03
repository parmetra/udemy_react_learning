import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import useMarverService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComicPage.scss';


const SingleComicPage = () => {
	const [comic, setComic] = useState(null);
	const {getComic, clearError, process, setProcess} = useMarverService();

	const {comicId} = useParams();

	useEffect(() => {
		renderComic();
	}, [comicId])

	const renderComic = () => {	
		clearError();
		getComic(comicId)
			.then(onComicLoaded)
			.then(() => setProcess("confirmed"))
	};

	const onComicLoaded = (comic) => {
		setComic(comic);
	};
	
    return (
		<>
			{setContent(process, View, comic)}
		</>
    )
}

const View = ({data}) => {
	const {thumbnail, title, description, pageCount, prices, language} = data;

	return (
		<div className="single-comic">
			<Helmet>
				<meta 
					name="description" 
					content={`Comic "${title}"`}
				/>
				<title>Comic "{title}" - Marvel Information Portal</title>
			</Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount} pages</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{prices}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Вернуться ко всем комиксам</Link>
        </div>
	)
}

export default SingleComicPage;