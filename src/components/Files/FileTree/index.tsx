import React from 'react';

import {TinyFile} from '@/iterfaces/TinyFile';

import styles from './index.module.scss';

type FilesTreeProps = {
    files: TinyFile[];
};

const FilesTree: React.FC<FilesTreeProps> = ({files}) => {
    return (
        <div className={styles.container}>
            {files.map((file) => (
                <div key={file}>{file}</div>
            ))}
        </div>
    );
};

export default FilesTree;
