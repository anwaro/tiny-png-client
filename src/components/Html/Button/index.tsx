import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

import Icon, {IconProps} from '@components/Html/Icon';

import styles from './index.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    icon?: IconProps['name'];
};

const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    className,
    ...restProps
}) => {
    return (
        <button className={classNames(styles.button, className)} {...restProps}>
            {icon ? <Icon name={icon} /> : null}
            {children}
        </button>
    );
};

export default Button;
