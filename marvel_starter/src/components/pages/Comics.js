import { useOutlet } from "react-router-dom";
import ComicsList from "../comicsList/ComicsList";
import SingleComicPage from "../pages/SingleComicPage";
import AppBanner from "../appBanner/AppBanner";

const Comics = () => {
	const outlet = useOutlet();

	return (
		<>
			{outlet ? <><AppBanner/><SingleComicPage/></> : <><AppBanner/><ComicsList/></>}
		</>
	)
}

export default Comics;