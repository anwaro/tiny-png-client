import React, {useMemo, useState} from 'react';

import {childrenToSortedFlatList} from '@utils/sortChildren';

import {FileTree} from '@/iterfaces/TinyFile';
import Image from '@components/Files/FileTreeViewer/Image';
import Icon from '@components/Html/Icon';

import styles from './index.module.scss';

type DirectoryProps = {
    directory: FileTree;
};

const Directory: React.FC<DirectoryProps> = ({directory}) => {
    const [open, setOpen] = useState(true);
    const childrenList = useMemo(
        () => childrenToSortedFlatList(directory.children),
        [directory.children],
    );
    return (
        <div className={styles.directory}>
            <div className={styles.directoryRow} onClick={() => setOpen(!open)}>
                <Icon name={'folder'} size={16} />
                <div className={styles.directoryName}>{directory.name}</div>
            </div>
            {open ? (
                <div className={styles.child}>
                    {childrenList.map((file) =>
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
