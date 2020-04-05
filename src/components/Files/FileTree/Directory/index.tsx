import React, {useState} from 'react';

import {TinyTreeFile} from '@/iterfaces/TinyFile';
import Image from '@components/Files/FileTree/Image';
import Icon from '@components/Html/Icon';

import styles from './index.module.scss';

type DirectoryProps = {
    directory: TinyTreeFile;
};

const Directory: React.FC<DirectoryProps> = ({directory}) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.directory}>
            <div className={styles.directoryRow} onClick={() => setOpen(!open)}>
                <Icon name={'folder'} size={16} />
                <div className={styles.directoryName}>{directory.name}</div>
            </div>
            {open ? (
                <div className={styles.child}>
                    {Object.values(directory.children).map((file) =>
                        file.isDir ? (
                            <Directory key={file.path} directory={file} />
                        ) : (
                            <Image key={file.path} image={file} />
                        ),
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Directory;
