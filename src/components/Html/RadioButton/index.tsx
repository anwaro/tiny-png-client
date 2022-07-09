import React from 'react';

import Button from '~components/Html/Button';
import {FCC} from '~types/global';

import {Container, IconWrapper} from './styles';

type RadioButtonProps = {
    active: boolean;
    onClick: () => void;
};

const RadioButton: FCC<RadioButtonProps> = ({children, active, onClick}) => {
    return (
        <Container onClick={onClick}>
            <IconWrapper>
                <Button icon={active ? 'checkboxChecked' : 'checkbox'} small />
            </IconWrapper>
            {children}
        </Container>
    );
};
RadioButton.displayName = 'RadioButton';

export default RadioButton;
