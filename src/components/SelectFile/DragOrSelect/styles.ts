import styled from 'styled-components';

import {orange} from '~const/colors';

type ContainerProps = {
    active: boolean;
    isDrag: boolean;
};

export const Container = styled.div<ContainerProps>`
    border-radius: 10px;
    display: flex;
    flex-grow: 1;
    max-height: 100%;
    cursor: ${({active, isDrag}) =>
        isDrag ? 'grabbing' : active ? 'pointer' : 'inherit'};
    color: ${({isDrag}) => (isDrag ? orange : 'inherit')};
    border: 2px ${({isDrag}) => (isDrag ? orange : 'transparent')} dashed;
`;
