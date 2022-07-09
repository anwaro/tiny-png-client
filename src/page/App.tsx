import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

import Layout from '~components/Layout';

import About from '~page/About';
import Dashboard from '~page/Dashboard';
import Settings from '~page/Settings';
import {AppProvider} from '~providers/AppProvider';

export const RoutingPaths = {
    Dashboard: '/',
    About: '/about',
    Settings: '/settings',
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <Layout>
                <HashRouter>
                    <Routes>
                        <Route
                            path={RoutingPaths.Dashboard}
                            element={<Dashboard />}
                        />
                        <Route path={RoutingPaths.About} element={<About />} />
                        <Route path={RoutingPaths.Settings} element={<Settings />} />
                    </Routes>
                </HashRouter>
            </Layout>
        </AppProvider>
    );
};

export default App;
