import {FileChildren, FileInfo, FileTree} from '~types/TinyFile';
import {readDirFilesRecursive} from '~utils/readDirFiles';
import {reduceFileTree} from '~utils/reduceFileTree';

const {parse, sep} = window.require('path');

export const escapeRegExp = (regExp: string) =>
    regExp.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

export const splitPath = (path: string) => {
    const parsedPath = parse(path);
    return `${path}`
        .replace(new RegExp(`^${escapeRegExp(parsedPath.root)}`), '')
        .split(sep);
};

export const mergeTreesRecursive = (
    originChildren: FileChildren,
    treeChildren: FileChildren,
): FileChildren => ({
    ...originChildren,
    ...Object.keys(treeChildren).reduce(
        (obj: FileChildren, key: string) =>
            key in originChildren
                ? {
                      ...obj,
                      [key]: {
                          ...originChildren[key],
                          children: mergeTreesRecursive(
                              originChildren[key].children,
                              treeChildren[key].children,
                          ),
                      },
                  }
                : {...obj, [key]: treeChildren[key]},
        {} as FileChildren,
    ),
});

export const mergeTrees = (origin: FileTree | undefined, tree: FileTree) =>
    origin
        ? {
              ...origin,
              children: mergeTreesRecursive(origin.children, tree.children),
          }
        : tree;

export const addFileToTree = (tree: FileTree | undefined, file: FileInfo) => {
    const pathParts = splitPath(file.path).reverse();
    const topPart = pathParts.shift();
    let childKey = topPart || '';

    const pathTree = pathParts.reduce(
        (childTree: FileTree, path: string) => {
            const key = childKey;
            childKey = path;
            return {
                path: path,
                name: path,
                size: 0,
                isDir: true,
                children: {[key]: childTree},
            };
        },
        {...file, children: {}},
    );

    return mergeTrees(tree, pathTree);
};

export const flatListToTree = (fileList: string[]) => {
    const allPaths = readDirFilesRecursive(fileList);
    const allFile = allPaths.reduce(
        (tree: FileTree | undefined, path) => addFileToTree(tree, path),
        undefined,
    ) as FileTree;
    return allFile ? reduceFileTree(allFile) : allFile;
};
