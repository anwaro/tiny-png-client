import {css} from 'styled-components';

const bg1 = '#2a2d33';
const bg2 = '#23262b';
const gradient1 = '#101113';
const gradient2 = '#3e434d';

export const active = css`
    :active {
        background: linear-gradient(145deg, ${bg2}, ${bg1});
    }
`;

export const softUiDark = (withActive = false) => css`
    background: linear-gradient(145deg, ${bg1}, ${bg2});
    box-shadow: 5px 5px 10px ${gradient1}, -3px -3px 7px ${gradient2};
    ${withActive && active}
`;
