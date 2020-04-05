import React from 'react';

import {TinyTreeFile} from '@/iterfaces/TinyFile';

import styles from './index.module.scss';

type ImageProps = {
    image: TinyTreeFile;
};

const Image: React.FC<ImageProps> = ({image}) => {
    return (
        <div className={styles.image}>
            <img className={styles.img} src={image.path} alt={image.name} />
            <div className={styles.imageName}>{image.name}</div>
        </div>
    );
};

export default Image;
