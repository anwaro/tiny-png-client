import styled from 'styled-components';

import {text} from '~const/colors';

import {softUiDark} from '~utils/styles';

export type StyledInputProps = {
    small?: boolean;
    big?: boolean;
};

const size = ({small, big}: StyledInputProps) => (small ? 30 : big ? 80 : 40);

const Input = styled.input<StyledInputProps>`
    border-radius: 40px;
    cursor: pointer;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    flex: 1;
    color: ${text};
    padding: 2px 10px;
    ${softUiDark()}
`;
export default Input;
