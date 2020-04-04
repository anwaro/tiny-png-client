import React from 'react';
import {Link} from 'react-router-dom';

import {RoutingPaths} from '@/controller/Router/AppRouter';

import Layout from '@components/Layout';

const Dashboard: React.FC = () => {
    return (
        <Layout
            title={'Tiny png client'}
            leftIcon={{
                icon: 'info',
                action: (history) => history.push(RoutingPaths.About),
            }}
        >
            <Link to={RoutingPaths.About}>Go to About</Link>
            <Link to={RoutingPaths.Dashboard}>Go to Home</Link>
        </Layout>
    );
};

export default Dashboard;
