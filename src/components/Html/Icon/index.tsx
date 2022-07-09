import React from 'react';

import * as srcs from '~assets/index';

import {Image} from './styles';

export const Icons = {
    add: srcs.add,
    checkbox: srcs.checkbox,
    checkboxChecked: srcs.checkboxChecked,
    close: srcs.close,
    folder: srcs.folder,
    home: srcs.home,
    info: srcs.info,
    menu: srcs.menu,
    pause: srcs.pause,
    play: srcs.play,
    prev: srcs.prev,
    plus: srcs.plus,
    refresh: srcs.refresh,
    settings: srcs.settings,
    tick: srcs.tick,
    trash: srcs.trash,
};

type IconNamesType = typeof Icons;

export type IconProps = {
    onClick?: () => void;
    name: keyof IconNamesType;
    size?: number;
};

const Icon: React.FC<IconProps> = ({name, ...rest}) => {
    return <Image src={Icons[name]} alt={'Icon'} {...rest} />;
};

export default Icon;
