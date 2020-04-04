import classNames from 'classnames';

import React from 'react';

import {RoutingPaths} from '@/controller/Router/AppRouter';
import MenuItem from '@components/Layout/MenuItem';

import Button from '@components/Html/Button';
import {useMenuOpen} from '@/store/app/hooks';

import styles from './index.module.scss';

const Menu: React.FC = () => {
    const [open, setMenuOpen] = useMenuOpen();
    return (
        <menu className={styles.menu}>
            <div className={classNames(styles.wrapper, {[styles.open]: open})} />
            <div className={classNames(styles.menuInner, {[styles.menuOpen]: open})}>
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
            <Button
                icon={open ? 'close' : 'menu'}
                onClick={() => setMenuOpen(!open)}
                className={styles.button}
            />
        </menu>
    );
};

export default Menu;
