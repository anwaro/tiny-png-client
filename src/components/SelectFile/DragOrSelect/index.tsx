import React, {DragEvent, useState} from 'react';

import {FCC} from '~types/global';

import {fileListToPathList} from '~utils/fileListToPathList';
import {openFileSelectDialog} from '~utils/openFileSelectDialog';

import {Container} from './styles';

type DragOrSelectProps = {
    processFiles: (_paths: string[]) => void;
    active: boolean;
};

const DragOrSelect: FCC<DragOrSelectProps> = ({processFiles, children, active}) => {
    const [onDrag, setOnDrag] = useState(false);

    const openDialog = () => {
        openFileSelectDialog().then(processFiles);
    };

    const onDrop = (e: DragEvent) => {
        e.preventDefault();
        setOnDrag(false);
        if (e.dataTransfer && e.dataTransfer.files) {
            processFiles(fileListToPathList(e.dataTransfer.files));
        }
    };

    const onDragHandler = (enter: boolean) => (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setOnDrag(enter);
    };

    const selectEvents = active
        ? {
              onClick: openDialog,
              onDragEnter: onDragHandler(true),
              onDragOver: onDragHandler(true),
              onDragLeave: onDragHandler(false),
              onDrop,
          }
        : {};

    return (
        <Container active={active} isDrag={active && onDrag} {...selectEvents}>
            {children}
        </Container>
    );
};

export default DragOrSelect;
