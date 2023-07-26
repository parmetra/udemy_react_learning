import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";

import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    const [selectedComics, setSelectedComics] = useState(null);

	const onCharSelected = (id) => {
        setSelectedChar(id);
	}

    const onComicsSelected = (id) => {
        setSelectedComics(id);
	}
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                {/* <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charID={selectedChar}/>
                    </ErrorBoundary>
                </div> */}
                <div>
                    <ErrorBoundary>
                        <ComicsList onComicsSelected={onComicsSelected} selectedComics={selectedComics} setSelectedComics={setSelectedComics}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;