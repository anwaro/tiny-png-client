import React, {useEffect} from 'react';

import {useFetchApiLimit} from '~api/useFetchApiLimit';

import {If} from '~components/atoms/If';
import Button from '~components/Html/Button';

import {ApiKey} from '~types/ApiKey';
import {FCC} from '~types/global';

import {Container, Progress, Row, Stat} from './styles';

const API_LIMIT = 500;

export type ApiKeyProps = {
    apiKey: ApiKey;
    activeKey: ApiKey | undefined;
    setActiveKey: (apiKey: ApiKey) => void;
    deleteKey: (apiKey: ApiKey) => void;
    updateKey: (apiKey: ApiKey) => void;
    index: number;
};
const ApiKeyItem: FCC<ApiKeyProps> = ({
    apiKey,
    activeKey,
    setActiveKey,
    deleteKey,
    updateKey,
    index,
}) => {
    const fetchApiLimit = useFetchApiLimit();

    const refreshApiKeyLimit = () => {
        fetchApiLimit(apiKey.key).then((compressionCount) => {
            if (compressionCount >= 0) {
                updateKey({...apiKey, compressionCount});
            } else {
                deleteKey(apiKey);
            }
        });
    };

    useEffect(() => {
        if (apiKey.compressionCount < 0) {
            refreshApiKeyLimit();
        }
    }, [apiKey]);

    return (
        <Container active={apiKey.key === activeKey?.key}>
            <Row>
                <Row>
                    {index + 1}. <pre>{apiKey.key}</pre> {apiKey.compressionCount}/
                    {API_LIMIT} (
                    {Math.round((apiKey.compressionCount / API_LIMIT) * 100)}%)
                </Row>
                <Row gap={4}>
                    <If condition={apiKey.key !== activeKey?.key}>
                        <Button
                            icon={'play'}
                            onClick={() => setActiveKey(apiKey)}
                            small
                        />
                    </If>
                    <Button icon={'refresh'} onClick={refreshApiKeyLimit} small />
                    <Button icon={'trash'} onClick={() => deleteKey(apiKey)} small />
                </Row>
            </Row>
            <Progress progress={(apiKey.compressionCount / API_LIMIT) * 100} />
            <Stat></Stat>
        </Container>
    );
};

export default ApiKeyItem;
