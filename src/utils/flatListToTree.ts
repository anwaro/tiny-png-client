import {parse, sep} from 'path';

import {
    TinyFileInfo,
    TinyTreeFile,
    TinyTreeFileChildren,
} from '@/iterfaces/TinyFile';

import {readDirFilesRecursive} from '@utils/readDirFiles';

export const escapeRegExp = (regExp: string) =>
    regExp.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

export const splitPath = (path: string) => {
    const parsedPath = parse(path);
    return `${path}`
        .replace(new RegExp(`^${escapeRegExp(parsedPath.root)}`), '')
        .split(sep);
};

export const mergeTreesRecursive = (
    originChildren: TinyTreeFileChildren,
    treeChildren: TinyTreeFileChildren,
): TinyTreeFileChildren => ({
    ...originChildren,
    ...Object.keys(treeChildren).reduce(
        (obj: TinyTreeFileChildren, key: string) =>
            originChildren.hasOwnProperty(key)
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
        {} as TinyTreeFileChildren,
    ),
});

export const mergeTrees = (origin: TinyTreeFile | undefined, tree: TinyTreeFile) =>
    origin
        ? {
              ...origin,
              children: mergeTreesRecursive(origin.children, tree.children),
          }
        : tree;

//
export const addFileToTree = (
    tree: TinyTreeFile | undefined,
    file: TinyFileInfo,
) => {
    const pathParts = splitPath(file.path).reverse();
    const topPart = pathParts.shift();
    let childKey = topPart || '';

    const pathTree = pathParts.reduce(
        (childTree: TinyTreeFile, path: string) => {
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

    return allPaths.reduce(
        (tree: TinyTreeFile | undefined, path) => addFileToTree(tree, path),
        undefined,
    );
};
