import {useMemo} from 'react';

import {FileInfo, FileStatus, FileTree} from '~types/TinyFile';
import {treeToFlatList} from '~utils/flatListToTree';

export default function useCurrentProcessedFile(filesTree: FileTree) {
    return useMemo(() => {
        const flatList = filesTree ? treeToFlatList(filesTree) : [];

        return Object.keys(FileStatus).reduce(
            (acc, status) => ({
                ...acc,
                [status]: flatList.filter((f) => status === f.status),
            }),
            {} as Record<FileStatus, FileInfo[]>,
        );
    }, [filesTree]);
}
