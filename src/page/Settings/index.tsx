import React from 'react';

import ApiKeysBlock from '~components/ApiKeysBlock';
import ScrollView from '~components/Html/ScrollView';
import SaveModeBlock from '~components/SaveModeBlock';
import NavigationController from '~page/NavigationController';

const Settings: React.FC = () => {
    return (
        <NavigationController title={'Settings'}>
            <ScrollView padding={[20]}>
                <ApiKeysBlock />
                <SaveModeBlock />
            </ScrollView>
        </NavigationController>
    );
};

export default Settings;
