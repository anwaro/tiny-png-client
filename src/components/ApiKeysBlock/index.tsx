import React, {useState} from 'react';

import Button from '~components/Html/Button';
import Input from '~components/Html/Input';

import {useActiveKey, useApiKeys} from '~providers/AppProvider';

import ApiKeyItem from './ApiKeyItem';

import {Container, Row} from './styles';

const ApiKeysBlock = () => {
    const {keys, deleteKey, addKey, updateKey} = useApiKeys();
    const {activeKey, setActiveKey} = useActiveKey();
    const [newKey, setNewKey] = useState('');

    const addNewKey = () => {
        if (newKey.length === 32) {
            addKey({key: newKey, compressionCount: -1});
            setNewKey('');
        }
    };

    return (
        <Container>
            <h3>Api keys</h3>
            {keys.map((key, i) => (
                <ApiKeyItem
                    key={`${key.key}_${i}`}
                    apiKey={key}
                    activeKey={activeKey}
                    setActiveKey={setActiveKey}
                    deleteKey={deleteKey}
                    updateKey={updateKey}
                    index={i}
                />
            ))}
            <Row>
                <Input value={newKey} onChange={(e) => setNewKey(e.target.value)} />
                <Button icon={'plus'} onClick={addNewKey} />
            </Row>
        </Container>
    );
};

export default ApiKeysBlock;
