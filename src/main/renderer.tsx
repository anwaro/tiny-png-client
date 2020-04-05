/**
 * React renderer.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/controllers/App';

import 'normalize.css/normalize.css';
import '../scss/global.scss';

ReactDOM.render(<App />, document.getElementById('app'));
