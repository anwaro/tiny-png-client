import React from 'react';
import {Link} from 'react-router-dom';

import Icon, {IconProps} from '@components/Html/Icon';

import styles from './index.module.scss';

type MenuItemProps = {
    to: string;
    icon: IconProps['name'];
    text: string;
    onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({to, icon, text, onClick}) => {
    return (
        <Link to={to} className={styles.menuItem} onClick={onClick}>
            <div className={styles.label}>{text}</div>
            <Icon name={icon} size={24} />
        </Link>
    );
};

export default MenuItem;
