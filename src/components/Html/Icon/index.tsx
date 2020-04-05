import React from 'react';

import * as srcs from '@assets/index';

import styles from './index.module.scss';

export const Icons = {
    add: srcs.add,
    checkbox: srcs.checkbox,
    close: srcs.close,
    info: srcs.info,
    menu: srcs.menu,
    pause: srcs.pause,
    play: srcs.play,
    prev: srcs.prev,
    settings: srcs.settings,
    tick: srcs.tick,
    home: srcs.home,
    folder: srcs.folder,
};

type IconNamesType = typeof Icons;

export type IconProps = {
    name: keyof IconNamesType;
    size?: number;
};

const Icon: React.FC<IconProps> = ({name, size = 24}) => {
    return (
        <img
            className={styles.button}
            style={{width: size, height: size}}
            src={Icons[name]}
            alt={'Icon'}
        />
    );
};

export default Icon;
