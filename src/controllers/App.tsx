import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppRouter from '@/controllers/Router/AppRouter';

import {persistor, store} from '../store/index';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
};

export default App;
