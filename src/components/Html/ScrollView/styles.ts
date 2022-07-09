import styled from 'styled-components';

export const StyledScrollView = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(131, 134, 137, 0.1);
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(131, 134, 137, 0.5);
    }
`;

export type ScrollInnerProps = {padding?: number[]};

export const ScrollInner = styled.div<ScrollInnerProps>`
    width: 100%;
    padding: ${({padding}) => (padding || [0]).map((p) => `${p}px`)};
`;
