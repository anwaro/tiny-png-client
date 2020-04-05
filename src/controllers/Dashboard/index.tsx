import React, {useState} from 'react';

import {Status} from '@/const/status';
import {RoutingPaths} from '@controllers/Router/AppRouter';
import {FileTree} from '@/iterfaces/TinyFile';
import Files from '@components/Files/FilesList';
import Layout from '@components/Layout';
import DragOrSelect from '@components/SelectFile/DragOrSelect';
import {flatListToTree} from '@utils/flatListToTree';

const Dashboard: React.FC = () => {
    const [status, setStatus] = useState(Status.Empty);
    const [filesTree, setFilesTree] = useState<FileTree | undefined>(undefined);

    const processFiles = (files: string[]) => {
        setFilesTree(flatListToTree(files));
        setStatus(Status.Ready);
    };

    return (
        <Layout
            leftIcon={{
                icon: 'info',
                action: (history) => history.push(RoutingPaths.About),
            }}
        >
            <DragOrSelect
                processFiles={processFiles}
                active={status === Status.Empty}
            >
                <Files
                    onCancel={() => setStatus(Status.Empty)}
                    onPause={() => setStatus(Status.Paused)}
                    onStart={() => setStatus(Status.Processing)}
                    filesTree={filesTree}
                    status={status}
                />
            </DragOrSelect>
        </Layout>
    );
};

export default Dashboard;
