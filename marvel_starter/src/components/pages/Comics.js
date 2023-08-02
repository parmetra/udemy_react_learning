import { useOutlet } from "react-router-dom";

import { Helmet } from "react-helmet";

import ComicsList from "../comicsList/ComicsList";
import SingleComicPage from "../pages/SingleComicPage";
import AppBanner from "../appBanner/AppBanner";

const Comics = () => {
	const outlet = useOutlet();

	return (
		<>
			<Helmet>
				<meta 
					name="description" 
					content="Comics List"
				/>
				<title>Comics List</title>
			</Helmet>
			{outlet ? <><AppBanner/><SingleComicPage/></> : <><AppBanner/><ComicsList/></>}
		</>
	)
}

export default Comics;