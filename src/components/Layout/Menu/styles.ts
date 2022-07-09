import styled from 'styled-components';

import Button from '~components/Html/Button';
import MenuItem from '~components/Layout/MenuItem';

import {bg} from '~const/colors';
import {softUiDark} from '~utils/styles';

export const MenuContainer = styled.menu`
    position: fixed;
    top: 16px;
    right: 16px;
    height: 40px;
    width: 40px;
    margin: 0;
    padding: 0;
    z-index: 1030;
    user-select: none;
`;

export const MenuWrapper = styled.menu<{open: boolean}>`
  margin: 0;
  overflow: hidden;
  background: ${bg};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .6s ease;
  width: ${({open}) => (open ? '300vh' : '40px')};
  height: ${({open}) => (open ? '300vh' : '40px')};
  transition-delay: ${({open}) => (open ? 0 : 0.6)}s;
  border-radius: 50%;
  ${softUiDark()};
}
`;

export const MenuInner = styled.div<{open: boolean}>`
    right: -16px;
    top: -16px;
    position: absolute;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    opacity: ${({open}) => (open ? 1 : 0)};
    transition: all 0.3s ease;
    transition-delay: ${({open}) => (open ? 0 : 0.6)}s;
    width: ${({open}) => (open ? 100 : 0)}vw;
    height: 100vh;
    overflow: hidden;
`;

export const MenuLink = styled(MenuItem)<{index: number; open: boolean}>`
    transition: all 0.3s ease;
    transform: translate(${({open}) => (open ? '-16px' : '100%')}, 0);
    transition-delay: ${({index}) => 0.3 + index * 0.1}s;
`;

export const LeftButton = styled(Button)`
    position: fixed;
    top: 16px;
    left: 16px;
`;

export const RightButton = styled(Button)`
    position: fixed;
    top: 16px;
    right: 16px;
`;
