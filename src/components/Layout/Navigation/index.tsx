import {History} from 'history';
import React from 'react';
import {useHistory} from 'react-router-dom';

import {IconProps} from '@components/Html/Icon';
import Button from '@components/Html/Button';

import styles from './index.module.scss';

type ActionIcon = {
    icon: IconProps['name'];
    action: (history: History) => void;
};

export type NavigationProps = {
    title: string;
    leftIcon?: ActionIcon;
};

const Navigation: React.FC<NavigationProps> = ({leftIcon, title}) => {
    const history = useHistory();

    return (
        <nav className={styles.nav}>
            <div>
                {leftIcon ? (
                    <Button
                        icon={leftIcon.icon}
                        onClick={() => leftIcon.action(history)}
                    />
                ) : null}
            </div>
            <div>{title}</div>
            <div />
        </nav>
    );
};

export default Navigation;
