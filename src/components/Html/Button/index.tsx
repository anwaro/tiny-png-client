import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

import Icon, {IconProps} from '@components/Html/Icon';

import styles from './index.module.scss';

type ButtonSize = 'small' | 'normal' | 'big';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    icon?: IconProps['name'];
    size?: ButtonSize;
};

const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    className,
    size = 'normal',
    ...restProps
}) => {
    return (
        <button
            className={classNames(styles.button, styles[size], className)}
            {...restProps}
        >
            {icon ? (
                <Icon
                    name={icon}
                    size={size === 'big' ? 30 : size === 'small' ? 16 : 20}
                />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
