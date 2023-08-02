import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import useMarverService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';

import './SingleHeroPage.scss';


const SingleHeroPage = () => {
	const [hero, setHero] = useState(null);
	const {loading, error, clearError, getCharachter} = useMarverService();

	const {heroId} = useParams();

	useEffect(() => {
		renderHero();
	}, [heroId])

	const renderHero = () => {	
		clearError();
		getCharachter(heroId)
			.then(onHeroLoaded)
	};

	const onHeroLoaded = (item) => {
		setHero(item);
	};
	
	
	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error || !hero) ? <View hero={hero}/> : null;
    return (
		<>
			{errorMessage}
			{spinner}
			{content}
		</>
    )
}

const View = ({hero}) => {
	const {thumbnail, name, description} = hero;

	return (
		<>
			<AppBanner/>
			<div className="single-hero">
				<img src={thumbnail} alt={name} className="single-hero__img"/>
				<div className="single-hero__info">
					<h2 className="single-hero__name">{name}</h2>
					<p className="single-hero__descr">{description}</p>
				</div>
			</div>
		</>
	)
}

export default SingleHeroPage;