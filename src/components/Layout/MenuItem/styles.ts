import styled from 'styled-components';

import {text} from '~const/colors';

export const MenuLink = styled.a`
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;

export const LinkLabel = styled.div`
    padding: 0 20px;
    font-size: 24px;
    color: ${text};
`;
