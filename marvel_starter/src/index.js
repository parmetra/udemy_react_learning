import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarverService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarverService();

// marvelService.getAllCharachters().then(res => console.log(res));
// marvelService.getCharachter(1017102).then(res => console.log(res));
marvelService.getAllCharachters().then(res => console.log(res.data.results.forEach(item => {
	console.log(item.name);
})));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
  document.getElementById('root')
);

