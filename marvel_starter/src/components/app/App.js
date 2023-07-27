import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import AppHeader from "../appHeader/AppHeader";
import { MainPage, Comics, Page404, SingleComicPage } from '../pages';

const App = () => {	
	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Routes>
						<Route path="/" element={<MainPage/>} />
						<Route path="comics" element={<Comics/>}>
							<Route path=":comicId" element={<SingleComicPage/>} />
						</Route>
						
						<Route path="*" element={<Page404/>} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default App;