import styled from 'styled-components';

import {softUiDark} from '~utils/styles';

export type StyledInputProps = {
    small?: boolean;
    big?: boolean;
};

const size = ({small, big}: StyledInputProps) => (small ? 30 : big ? 80 : 40);

export const StyledInput = styled.input<StyledInputProps>`
    border-radius: 50%;
    cursor: pointer;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    flex: 1;
    ${softUiDark(true)}
`;
