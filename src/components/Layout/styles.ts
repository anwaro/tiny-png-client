import styled, {createGlobalStyle} from 'styled-components';

import {FontStyle} from '~assets/fonts/style';

import {dark, light, text} from '~const/colors';
import {softUiDark} from '~utils/styles';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    background: ${dark};
    color: ${text};
    height: 100vh;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${FontStyle}
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${dark};
    height: 100vh;
    color: ${light};
    padding: 70px 16px 16px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    flex-grow: 1;
    height: 100%;
    ${softUiDark()}
`;

export default GlobalStyle;
