import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '~utils/reportWebVitals';

import App from './page/App';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();
