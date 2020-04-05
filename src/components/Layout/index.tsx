import React from 'react';

import Menu, {MenuProps} from '@components/Layout/Menu';

import styles from './index.module.scss';

type LayoutProps = MenuProps & {};

const Layout: React.FC<LayoutProps> = ({children, leftIcon}) => {
    return (
        <div className={styles.layout}>
            <Menu leftIcon={leftIcon} />
            {children}
        </div>
    );
};

export default Layout;
