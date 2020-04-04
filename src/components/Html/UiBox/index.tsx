import React, {HTMLAttributes} from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

const UiBox: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...restParams
}) => {
    return (
        <div className={classNames(styles.container, className)} {...restParams}>
            {children}
        </div>
    );
};

export default UiBox;
