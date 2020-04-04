import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import About from '@/controller/About';
import Dashboard from '@/controller/Dashboard';
import Wrapper from '@/controller/Router/Wrapper';

import styles from './index.module.scss';

export const RoutingPaths = {
    Dashboard: '/',
    About: '/about',
    Settings: '/settings',
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <AnimatedSwitch
                atEnter={{opacity: 0}}
                atLeave={{opacity: 0}}
                atActive={{opacity: 1}}
                className={styles.switchWrapper}
                wrapperComponent={Wrapper}
            >
                <Route exact path={RoutingPaths.Dashboard} component={Dashboard} />
                <Route path={RoutingPaths.About} component={About} />
                <Route path={RoutingPaths.Settings} component={About} />
            </AnimatedSwitch>
        </Router>
    );
};

export default AppRouter;
