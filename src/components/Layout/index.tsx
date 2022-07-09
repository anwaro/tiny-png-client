import React from 'react';

import Menu from '~components/Layout/Menu';

import {FCC} from '~types/global';

import GlobalStyle, {Container, LayoutContainer} from './styles';

const Layout: FCC = ({children}) => {
    return (
        <LayoutContainer>
            <GlobalStyle />
            <Menu />
            <Container>{children}</Container>
        </LayoutContainer>
    );
};

export default Layout;
