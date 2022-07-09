import React from 'react';

import Directory from '~components/Files/FileTreeViewer/Directory';
import ScrollView from '~components/Html/ScrollView';
import {FileTree} from '~types/TinyFile';

type FileTreeViewerProps = {
    filesTree: FileTree;
};

const FileTreeViewer: React.FC<FileTreeViewerProps> = ({filesTree}) => {
    return (
        <ScrollView padding={[20]}>
            <Directory directory={filesTree} />
        </ScrollView>
    );
};

export default FileTreeViewer;
