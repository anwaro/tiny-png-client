import styled from 'styled-components';

export const Image = styled.img<{size?: number}>`
    display: inline-block;
    object-fit: contain;
    width: ${({size}) => size || 24}px;
    height: ${({size}) => size || 24}px;
`;
