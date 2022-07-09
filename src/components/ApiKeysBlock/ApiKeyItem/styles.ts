import styled from 'styled-components';

import {text} from '~const/colors';

export const Row = styled.div<{gap?: number}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    gap: ${({gap}) => (gap ? `${gap}px` : 'unset')};

    pre {
        margin: 0 20px 0 5px;
    }
`;

export const Container = styled.div<{active: boolean}>`
    padding-top: 10px;
    padding-bottom: 10px;

    ${Row} {
        color: ${({active}) => (active ? 'white' : text)};
    }
`;

export const Progress = styled.div<{progress: number}>`
    background: linear-gradient(to right, green, red);
    clip-path: polygon(
        0 0,
        ${({progress}) => progress}% 0,
        ${({progress}) => progress}% 100%,
        0 100%
    );
    height: 1px;
    width: 100%;
`;

export const Stat = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    font-size: 9px;
    margin-top: -10px;
`;
