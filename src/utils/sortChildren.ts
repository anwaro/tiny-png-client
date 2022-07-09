import {FileChildren, FileTree} from '~types/TinyFile';

export const childrenToSortedFlatList = (children: FileChildren): FileTree[] => {
    return Object.values(children).sort((a: FileTree, b: FileTree) => {
        return (a.isDir && b.isDir) || (!a.isDir && !b.isDir)
            ? a.name < b.name
                ? -1
                : 1
            : a.isDir
            ? -1
            : 1;
    });
};
