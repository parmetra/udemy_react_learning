import { useState } from "react";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
	const [selectedComics, setSelectedComics] = useState(null);

	const onComicsSelected = (id) => {
		setSelectedComics(id);
	}

	return (
		<div>
			<AppBanner/>
			<ErrorBoundary>
				<ComicsList onComicsSelected={onComicsSelected} selectedComics={selectedComics} setSelectedComics={setSelectedComics}/>
			</ErrorBoundary>
		</div>
	)
}

export default ComicsPage;