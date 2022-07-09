import React from 'react';

import {If} from '~components/atoms/If';
import Button from '~components/Html/Button';
import Input from '~components/Html/Input';

import RadioButton from '~components/Html/RadioButton';
import {FCC} from '~types/global';
import {SaveMode} from '~types/Settings';
import {openDirSelectDialog} from '~utils/openFileSelectDialog';

import {Info, Row} from './styles';

export type ModelSelectProps = {
    label: string;
    mode: SaveMode;
    activeMode: SaveMode;

    changeMode: (mode: SaveMode) => void;
    inputValue?: string;
    inputValueChange?: (value: string) => void;

    pathValue?: string;
    pathValueChange?: (value: string) => void;
};
const ModelSelect: FCC<ModelSelectProps> = ({
    mode,
    activeMode,
    changeMode,
    inputValueChange,
    inputValue,
    pathValueChange,
    pathValue,
    children,
    label,
}) => {
    const selectFolder = () => {
        openDirSelectDialog().then((path: string[]) => {
            if (path && path.length) {
                pathValueChange(path[0]);
            }
        });
    };

    return (
        <RadioButton active={mode === activeMode} onClick={() => changeMode(mode)}>
            {label}
            <If condition={mode === activeMode}>
                {children && <Info>{children}</Info>}
                <If condition={inputValueChange}>
                    <Row>
                        <Input
                            value={inputValue}
                            onChange={({target}) =>
                                inputValueChange && inputValueChange(target.value)
                            }
                        />
                    </Row>
                </If>
                <If condition={pathValueChange}>
                    <Row>
                        <Input value={pathValue} disabled />
                        <Button onClick={selectFolder}>Select path</Button>
                    </Row>
                </If>
            </If>
        </RadioButton>
    );
};

export default ModelSelect;
