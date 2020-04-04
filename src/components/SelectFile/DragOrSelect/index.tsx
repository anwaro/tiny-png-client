import classNames from 'classnames';
import React, {DragEvent, useState} from 'react';

import {act} from 'react-dom/test-utils';

import UiBox from '@components/Html/UiBox';
import {fileListToPathList} from '@utils/fileListToPathList';
import {openFileSelectDialog} from '@utils/openFileSelectDialog';

import styles from './index.module.scss';

type DragOrSelectProps = {
    processFiles: (paths: string[]) => void;
    active: boolean;
};

const DragOrSelect: React.FC<DragOrSelectProps> = ({
    processFiles,
    children,
    active,
}) => {
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
              onDrop: onDrop,
          }
        : {};

    return (
        <UiBox
            className={classNames({
                [styles.container]: true,
                [styles.active]: active,
                [styles.drag]: onDrag && active,
            })}
            {...selectEvents}
        >
            {children}
        </UiBox>
    );
};

export default DragOrSelect;
