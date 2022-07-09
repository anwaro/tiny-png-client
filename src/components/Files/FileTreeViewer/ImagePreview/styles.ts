import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;
export const Image = styled.img`
    display: inline-block;
    height: 20px;
    width: 20px;
    object-fit: contain;
`;

export const ImageName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
    font-size: 14px;
`;
