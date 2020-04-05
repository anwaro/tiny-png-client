import React from 'react';

import {Status} from '@/const/status';
import {FileTree} from '@/iterfaces/TinyFile';
import AutoScrollSwitcher from '@components/Files/AutoScrollSwitcher';
import FileListHeader from '@components/Files/FileListHeader';
import FileTreeViewer from '@components/Files/FileTreeViewer';
import DragActiveInfo from '@components/SelectFile/DragActiveInfo';

import styles from './index.module.scss';

type FilesListProps = {
    filesTree: FileTree | undefined;
    status: number;
    onCancel: () => void;
    onPause: () => void;
    onStart: () => void;
};

const FilesList: React.FC<FilesListProps> = ({
    onCancel,
    onPause,
    onStart,
    status,
    filesTree,
}) => {
    return (
        <div className={styles.filesList}>
            <FileListHeader
                status={status}
                onCancel={onCancel}
                onPause={onPause}
                onStart={onStart}
            />
            {status === Status.Empty ? (
                <DragActiveInfo />
            ) : filesTree ? (
                <FileTreeViewer filesTree={filesTree} />
            ) : null}
            <AutoScrollSwitcher />
        </div>
    );
};

export default FilesList;
