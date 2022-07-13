import React from 'react';

import Files from '~components/Files/FilesList';
import DragOrSelect from '~components/SelectFile/DragOrSelect';
import {Status} from '~const/status';
import NavigationController from '~page/NavigationController';

import useTinyService from '../../hooks/useTinyService';

const Dashboard: React.FC = () => {
    const {status, setStatus, filesTree, cancel, processFiles} = useTinyService();
    return (
        <NavigationController title={'Dashboard'} isMain>
            <DragOrSelect processFiles={processFiles} active={!filesTree}>
                <Files
                    onCancel={cancel}
                    onPause={() => setStatus(Status.Paused)}
                    onStart={() => setStatus(Status.Processing)}
                    filesTree={filesTree}
                    status={status}
                />
            </DragOrSelect>
        </NavigationController>
    );
};

export default Dashboard;
