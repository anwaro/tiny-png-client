import React from 'react';

import {TinyFile} from '@/iterfaces/TinyFile';

import AutoScrollSwitcher from '@components/Files/AutoScrollSwitcher';

import FileListHeader from '@components/Files/FileListHeader';
import FileTree from '@components/Files/FileTree';
import UiBox from '@components/Html/UiBox';

import styles from './index.module.scss';

type FilesListProps = {
    files: TinyFile[];
    status: number;
};

const FilesList: React.FC<FilesListProps> = ({status, files}) => {
    return (
        <UiBox className={styles.container}>
            <FileListHeader status={status} />
            <FileTree files={files} />
            <AutoScrollSwitcher />
        </UiBox>
    );
};

export default FilesList;
