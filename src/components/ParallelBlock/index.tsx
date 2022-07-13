import React from 'react';

import {useParallelCount} from '~providers/AppProvider';

import {Container, Range} from './styles';

const ParallelBlock = () => {
    const {parallelCount, setParallelCount} = useParallelCount();

    return (
        <Container>
            <h3>How many photos can be compressed in parallel: {parallelCount}</h3>
            <Range
                type={'range'}
                min={1}
                max={20}
                step={1}
                value={parallelCount}
                onChange={(e) => setParallelCount(e.target.valueAsNumber)}
            />
        </Container>
    );
};

export default ParallelBlock;
