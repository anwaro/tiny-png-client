import React from 'react';

import styles from './index.module.scss';

const DragActiveInfo: React.FC = () => {
    return (
        <div className={styles.box}>
            <div className={styles.info}>{'Drag/select files or directory'}</div>
        </div>
    );
};

export default DragActiveInfo;
