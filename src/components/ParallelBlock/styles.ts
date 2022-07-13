import styled from 'styled-components';

import {softUiDark} from '~utils/styles';

export const Container = styled.div``;

export const Range = styled.input`
    width: 100%;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 5px;

    ${softUiDark()}
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 30px;
        width: 30px;
        border-radius: 15px;
        cursor: pointer;
        margin-top: -5px;
        ${softUiDark()}
    }

    &:focus::-webkit-slider-thumb {
        ${softUiDark(true)}
    }
`;
