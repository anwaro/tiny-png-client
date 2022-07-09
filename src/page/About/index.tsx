import React from 'react';

import ScrollView from '~components/Html/ScrollView';

import NavigationController from '~page/NavigationController';

const About: React.FC = () => {
    return (
        <NavigationController title={'About'}>
            <ScrollView padding={[20]}>About</ScrollView>
        </NavigationController>
    );
};

export default About;
