import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {legacy_createStore as createStore} from "redux";
import reducer from "./reducer";
import {Provider} from "react-redux";

const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

