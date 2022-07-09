import React, {useMemo, useState} from 'react';

import Image from '~components/Files/FileTreeViewer/ImagePreview';
import Icon from '~components/Html/Icon';

import {FileTree} from '~types/TinyFile';

import {childrenToSortedFlatList} from '~utils/sortChildren';

import {Container, DirectoryName, DirectoryRow, DirectoryTree} from './styles';

type DirectoryProps = {
    directory: FileTree;
};

const Directory: React.FC<DirectoryProps> = ({directory}) => {
    const [open, setOpen] = useState(true);
    const childrenList = useMemo(
        () => childrenToSortedFlatList(directory.children),
        [directory.children],
    );
    return (
        <Container>
            <DirectoryRow onClick={() => setOpen(!open)}>
                <Icon name={'folder'} size={16} />
                <DirectoryName>{directory.name}</DirectoryName>
            </DirectoryRow>
            {open ? (
                <DirectoryTree>
                    {childrenList.map((file) =>
                        file.isDir ? (
                            <Directory key={file.path} directory={file} />
                        ) : (
                            <Image key={file.path} image={file} />
                        ),
                    )}
                </DirectoryTree>
            ) : null}
        </Container>
    );
};

export default Directory;
