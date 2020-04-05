import React from 'react';

import {TinyTreeFile} from '@/iterfaces/TinyFile';

import AutoScrollSwitcher from '@components/Files/AutoScrollSwitcher';

import FileListHeader from '@components/Files/FileListHeader';
import FileTree from '@components/Files/FileTree';
import UiBox from '@components/Html/UiBox';

import styles from './index.module.scss';

type FilesListProps = {
    filesTree: TinyTreeFile | undefined;
    status: number;
};

const FilesList: React.FC<FilesListProps> = ({status, filesTree}) => {
    return (
        <UiBox className={styles.filesList}>
            <FileListHeader status={status} />
            {filesTree ? <FileTree filesTree={filesTree} /> : null}
            <AutoScrollSwitcher />
        </UiBox>
    );
};

export default FilesList;
