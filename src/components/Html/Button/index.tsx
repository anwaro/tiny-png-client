import React, {HTMLAttributes} from 'react';

import Icon, {IconProps} from '~components/Html/Icon';

import {StyledButton, StyledButtonProps} from './styles';

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
    StyledButtonProps & {
        icon?: IconProps['name'];
    };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, icon, ...restProps}, ref) => {
        return (
            <StyledButton ref={ref} {...restProps}>
                {icon ? (
                    <Icon
                        name={icon}
                        size={restProps.big ? 30 : restProps.small ? 16 : 20}
                    />
                ) : null}
                {children}
            </StyledButton>
        );
    },
);

Button.displayName = 'Button';

export default Button;
