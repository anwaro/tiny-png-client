import classNames from 'classnames';

import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

import Directory from '@components/Files/FileTree/Directory';
import {TinyTreeFile} from '@/iterfaces/TinyFile';

import styles from './index.module.scss';

type FilesTreeProps = {
    filesTree: TinyTreeFile;
};

const FilesTree: React.FC<FilesTreeProps> = ({filesTree}) => {
    return (
        <div className={styles.fileTree}>
            <Scrollbars
                style={{width: '100%'}}
                renderThumbVertical={({className, ...props}) => (
                    <div
                        {...props}
                        className={classNames(className, styles.scrollThumb)}
                    />
                )}
                autoHide
            >
                <div className={styles.fileTreeInner}>
                    <Directory directory={filesTree} />
                </div>
            </Scrollbars>
        </div>
    );
};

export default FilesTree;
