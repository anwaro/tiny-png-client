import React from 'react';

import {If} from '~components/atoms/If';

import AutoScrollSwitcher from '~components/Files/AutoScrollSwitcher';
import FileListHeader from '~components/Files/FileListHeader';
import FileTreeViewer from '~components/Files/FileTreeViewer';
import DragActiveInfo from '~components/SelectFile/DragActiveInfo';

import {Status} from '~const/status';
import {FileTree} from '~types/TinyFile';

import {Container} from './styles';

type FilesListProps = {
    filesTree: FileTree | undefined;
    status: Status;
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
        <Container>
            <FileListHeader
                showed={Boolean(filesTree)}
                status={status}
                onCancel={onCancel}
                onPause={onPause}
                onStart={onStart}
            />
            <If condition={!filesTree}>
                <DragActiveInfo />
            </If>
            <If condition={filesTree}>
                <FileTreeViewer filesTree={filesTree} />
            </If>
            <AutoScrollSwitcher />
        </Container>
    );
};

export default FilesList;
