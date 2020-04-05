import classNames from 'classnames';

import {History} from 'history';

import React from 'react';

import {useHistory} from 'react-router-dom';

import {IconProps} from '@components/Html/Icon';

import {RoutingPaths} from '@/controllers/Router/AppRouter';
import MenuItem from '@components/Layout/MenuItem';

import Button from '@components/Html/Button';
import {useMenuOpen} from '@/store/app/hooks';

import styles from './index.module.scss';
type ActionIcon = {
    icon: IconProps['name'];
    action: (history: History) => void;
};

export type MenuProps = {
    leftIcon?: ActionIcon;
};

const Menu: React.FC<MenuProps> = ({leftIcon}) => {
    const history = useHistory();
    const [open, setMenuOpen] = useMenuOpen();
    return (
        <>
            <menu className={styles.menu}>
                <div className={classNames(styles.wrapper, {[styles.open]: open})} />
                <div
                    className={classNames(styles.menuInner, {
                        [styles.menuOpen]: open,
                    })}
                >
                    <MenuItem
                        to={RoutingPaths.Dashboard}
                        icon={'home'}
                        text={'Dashboard'}
                        onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                        to={RoutingPaths.Settings}
                        icon={'settings'}
                        text={'Settings'}
                        onClick={() => setMenuOpen(false)}
                    />
                    <MenuItem
                        to={RoutingPaths.About}
                        icon={'info'}
                        text={'About'}
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
                {leftIcon ? (
                    <Button
                        className={styles.leftButton}
                        icon={leftIcon.icon}
                        onClick={() => leftIcon.action(history)}
                    />
                ) : null}
                <Button
                    icon={open ? 'close' : 'menu'}
                    onClick={() => setMenuOpen(!open)}
                    className={styles.button}
                />
            </menu>
        </>
    );
};

export default Menu;
