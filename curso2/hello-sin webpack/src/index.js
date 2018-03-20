//dependecias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

//routes
import AppRoutes from './routers';


//assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

render( 
	<Router>
		<AppRoutes />
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();
