import { useState } from "react";

import {Helmet} from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import SearchForm from "../searchForm/SearchForm";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	const onCharSelected = (id) => {
		setSelectedChar(id);
	}

	return (
		<>
			<Helmet>
				<meta 
					name="description" 
					content="Marvel Information Portal"
				/>
				<title>Marvel Information Portal</title>
			</Helmet>
			<ErrorBoundary>
				<RandomChar/>
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected}/>
				</ErrorBoundary>
				<div className="right-section">
					<ErrorBoundary>
						<CharInfo charID={selectedChar}/>
					</ErrorBoundary>
					<SearchForm/>
				</div>
				
			</div>
			<img className="bg-decoration" src={decoration} alt="vision"/>
		</>
	)
}

export default MainPage;