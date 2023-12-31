import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import useMarverService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

import AppBanner from '../appBanner/AppBanner';

import './SingleHeroPage.scss';


const SingleHeroPage = () => {
	const [hero, setHero] = useState(null);
	const {clearError, getCharachter, process, setProcess} = useMarverService();

	const {heroId} = useParams();

	useEffect(() => {
		renderHero();
	}, [heroId])

	const renderHero = () => {	
		clearError();
		getCharachter(heroId)
			.then(onHeroLoaded)
			.then(() => setProcess("confirmed"));
	};

	const onHeroLoaded = (item) => {
		setHero(item);
	};
	
	
	// const errorMessage = error ? <ErrorMessage/> : null;
	// const spinner = loading ? <Spinner/> : null;
	// const content = !(loading || error || !hero) ? <View hero={hero}/> : null;
    return (
		<>
			{setContent(process, View, hero)}
		</>
    )
}

const View = ({data}) => {
	const {thumbnail, name, description} = data;

	return (
		<>
			<Helmet>
				<meta 
					name="description" 
					content={`About "${name}"`}
				/>
				<title>Hero "{name}" - Marvel Information Portal</title>
			</Helmet>
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