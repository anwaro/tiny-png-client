import React, {useState} from 'react';

import Files from '~components/Files/FilesList';
import DragOrSelect from '~components/SelectFile/DragOrSelect';
import {Status} from '~const/status';
import NavigationController from '~page/NavigationController';

import {FileTree} from '~types/TinyFile';
import {flatListToTree} from '~utils/flatListToTree';

const Dashboard: React.FC = () => {
    const [status, setStatus] = useState(Status.Paused);
    const [filesTree, setFilesTree] = useState<FileTree | undefined>(undefined);

    const processFiles = (files: string[]) => {
        if (files.length) {
            setFilesTree(flatListToTree(files));
            setStatus(Status.Paused);
        }
    };
    return (
        <NavigationController title={'Dashboard'} isMain>
            <DragOrSelect processFiles={processFiles} active={!filesTree}>
                <Files
                    onCancel={() => setFilesTree(undefined)}
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
