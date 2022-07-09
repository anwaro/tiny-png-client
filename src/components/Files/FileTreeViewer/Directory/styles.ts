import styled from 'styled-components';

export const Container = styled.div`
    user-select: none;
`;

export const DirectoryRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;
`;

export const DirectoryName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
    font-size: 14px;
`;

export const DirectoryTree = styled.div`
    padding-left: 16px;
`;
