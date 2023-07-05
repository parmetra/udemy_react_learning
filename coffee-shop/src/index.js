import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import 'bootstrap-reboot'
import './index.sass';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <Theme preset={presetGpnDefault}> */}
			<App />
		{/* </Theme> */}
	</React.StrictMode>
);
