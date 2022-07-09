import React from 'react';

import Icon, {IconProps} from '~components/Html/Icon';

import {LinkLabel, MenuLink} from './styles';

type MenuItemProps = {
    icon: IconProps['name'];
    text: string;
    onClick: () => void;
};

const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
    ({icon, text, onClick, ...rest}, ref) => {
        return (
            <MenuLink onClick={onClick} ref={ref} {...rest}>
                <LinkLabel>{text}</LinkLabel>
                <Icon name={icon} size={24} />
            </MenuLink>
        );
    },
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
