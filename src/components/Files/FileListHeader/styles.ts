import styled from 'styled-components';

import Button from '~components/Html/Button';

export const Header = styled.div`
    position: absolute;
    right: 0;
    width: 120px;
    height: 50px;
    overflow: hidden;
    z-index: 999;
`;

export const CircleButton = styled(Button)<{showed: boolean}>`
    right: 16px;
    top: 8px;
    position: absolute;
    transform: translate(0, ${({showed}) => (showed ? 0 : -100)}px);
    transition: all 0.3s ease;

    &:first-of-type {
        right: 62px;
    }
`;
