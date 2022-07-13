import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    position: relative;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
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

export const Progress = styled.div<{progress: number}>`
    position: absolute;
    height: 1px;
    left: 0;
    bottom: -1px;
    background: rgba(128, 128, 128, 0.05);
    width: 100%;

    &:before {
        content: '';
        display: block;
        transition: all 0.3s ease;
        position: absolute;
        height: 1px;
        left: 0;
        bottom: 0;
        background: rgba(128, 128, 128, 0.4);
        width: ${({progress}) => progress}%;
    }
`;

export const Error = styled.div`
    color: red;
    font-size: 10px;
`;

export const Stat = styled.div`
    font-size: 12px;
`;
