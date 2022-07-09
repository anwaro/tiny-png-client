import styled from 'styled-components';

import {softUiDark} from '~utils/styles';

export type StyledButtonProps = {
    small?: boolean;
    big?: boolean;
};

const size = ({small, big}: StyledButtonProps) => (small ? 30 : big ? 80 : 40);

export const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 50%;
    cursor: pointer;
    height: ${size}px;
    width: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    ${softUiDark(true)}
`;
