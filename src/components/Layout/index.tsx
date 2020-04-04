import React from 'react';

import Menu from '@components/Layout/Menu';

import Navigation, {NavigationProps} from '@components/Layout/Navigation';

import styles from './index.module.scss';

type LayoutProps = NavigationProps & {};

const Layout: React.FC<LayoutProps> = ({children, title, leftIcon}) => {
    return (
        <div className={styles.layout}>
            <Navigation title={title} leftIcon={leftIcon} />
            <Menu />
            {children}
        </div>
    );
};

export default Layout;
