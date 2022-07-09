import {FileChildren, FileTree} from '~types/TinyFile';

export const reduceEmptyChildrenRecursive = (
    fileChildren: FileChildren,
): FileChildren => {
    return Object.keys(fileChildren).reduce((acc: FileChildren, key: string) => {
        const children = reduceEmptyChildrenRecursive(fileChildren[key].children);
        return !fileChildren[key].isDir || Object.keys(children).length
            ? {...acc, [key]: {...fileChildren[key], children}}
            : acc;
    }, {});
};

export const reduceEmptyDir = (fileTree: FileTree): FileTree | undefined => {
    const children = reduceEmptyChildrenRecursive(fileTree.children);
    return Object.keys(children).length ? {...fileTree, children} : undefined;
};

export const reduceFileTreeLevel = (fileTree: FileTree): FileTree => {
    return Object.keys(fileTree.children).length === 1 &&
        Object.values(fileTree.children)[0].isDir
        ? reduceFileTreeLevel(Object.values(fileTree.children)[0])
        : fileTree;
};

export const reduceFileTree = (fileTree: FileTree) => {
    const reducedTree = reduceEmptyDir(fileTree);
    return reducedTree ? reduceFileTreeLevel(reducedTree) : reducedTree;
};
