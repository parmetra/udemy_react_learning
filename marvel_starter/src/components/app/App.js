import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const Comics = lazy(() => import('../pages/Comics'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleHeroPage = lazy(() => import('../pages/SingleHeroPage'));


const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path="/" element={<MainPage/>} />
							<Route path="comics" element={<Comics/>}>
								<Route path=":comicId" element={<SingleComicPage/>} />
							</Route>
							<Route path="hero/:heroId" element={<SingleHeroPage/>} />
							
							<Route path="*" element={<Page404/>} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)
}

export default App;