import React from 'react';

import {useShowButton} from '~components/Files/FileListHeader/useShowButton';
import {Status} from '~const/status';

import {CircleButton, Header} from './styles';

type FileListHeaderProps = {
    showed: boolean;
    status: Status;
    onCancel: () => void;
    onPause: () => void;
    onStart: () => void;
};

const FileListHeader: React.FC<FileListHeaderProps> = ({
    status,
    onCancel,
    onPause,
    onStart,
    showed,
}) => {
    const showBtn = useShowButton(showed, status);

    return (
        <Header>
            <CircleButton
                showed={showBtn.cancel}
                onClick={onCancel}
                icon="close"
                small
            />
            <CircleButton
                onClick={onPause}
                showed={showBtn.pause}
                icon="pause"
                small
            />
            <CircleButton
                onClick={onStart}
                showed={showBtn.start}
                icon="play"
                small
            />
        </Header>
    );
};

export default FileListHeader;
