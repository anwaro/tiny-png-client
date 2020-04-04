import React, {useState} from 'react';

import {TinyFile} from '@/iterfaces/TinyFile';
import {flatListToTree} from '@utils/flatListToTree';

import {Status} from '@/const/status';
import {RoutingPaths} from '@/controller/Router/AppRouter';

import Files from '@components/Files/FilesList';
import Layout from '@components/Layout';
import DragOrSelect from '@components/SelectFile/DragOrSelect';

const Dashboard: React.FC = () => {
    const [status, setStatus] = useState(Status.Empty);
    const [paths, setPaths] = useState<TinyFile[]>([]);

    const processFiles = (files: TinyFile[]) => {
        setPaths(files);
        console.log(flatListToTree(files));
        setStatus(Status.Ready);
    };

    return (
        <Layout
            title={'Tiny png client'}
            leftIcon={{
                icon: 'info',
                action: (history) => history.push(RoutingPaths.About),
            }}
        >
            <DragOrSelect
                processFiles={processFiles}
                active={status === Status.Empty}
            >
                {status === Status.Empty ? (
                    'select or drag'
                ) : (
                    <Files files={paths} status={status} />
                )}
            </DragOrSelect>
        </Layout>
    );
};

export default Dashboard;
