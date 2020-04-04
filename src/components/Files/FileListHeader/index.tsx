import React from 'react';

import Button from '@components/Html/Button';

import styles from './index.module.scss';

type FileListHeaderProps = {
    status: number;
};

const FileListHeader: React.FC<FileListHeaderProps> = ({status}) => {
    return (
        <div className={styles.container}>
            <Button icon="play" />
        </div>
    );
};

export default FileListHeader;
