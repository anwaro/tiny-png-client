import classNames from 'classnames';

import React from 'react';

import {useShowButton} from '@components/Files/FileListHeader/useShowButton';
import Button from '@components/Html/Button';

import styles from './index.module.scss';

type FileListHeaderProps = {
    status: number;
    onCancel: () => void;
    onPause: () => void;
    onStart: () => void;
};

const FileListHeader: React.FC<FileListHeaderProps> = ({
    status,
    onCancel,
    onPause,
    onStart,
}) => {
    const showBtn = useShowButton(status);

    const buttonClassName = (show: boolean) =>
        classNames({
            [styles.button]: true,
            [styles.showed]: show,
        });

    return (
        <div className={styles.header}>
            <Button
                onClick={onCancel}
                className={buttonClassName(showBtn.cancel)}
                size={'small'}
                icon="close"
            />
            <Button
                onClick={onPause}
                className={buttonClassName(showBtn.pause)}
                size={'small'}
                icon="pause"
            />
            <Button
                onClick={onStart}
                className={buttonClassName(showBtn.start)}
                size={'small'}
                icon="play"
            />
        </div>
    );
};

export default FileListHeader;
