import React from 'react';
import classNames from 'classnames';

import {hashClassName} from '@utils/hashClassName';

import {FileTree} from '@/iterfaces/TinyFile';

import styles from './index.module.scss';

type ImageProps = {
    image: FileTree;
};

const Image: React.FC<ImageProps> = ({image}) => {
    return (
        <div className={classNames(styles.image, hashClassName(image.path))}>
            <img className={styles.img} src={image.path} alt={image.name} />
            <div className={styles.imageName}>{image.name}</div>
        </div>
    );
};

export default Image;
