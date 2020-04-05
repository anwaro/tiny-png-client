import React from 'react';

import Layout from '@components/Layout';

const About: React.FC = () => {
    return (
        <Layout
            title={'About'}
            leftIcon={{icon: 'prev', action: (history) => history.goBack()}}
        >
            About
        </Layout>
    );
};

export default About;
