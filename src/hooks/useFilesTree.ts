import {FileInfo, FileTree} from '~types/TinyFile';
import useRefState from '~utils/state/useRefState';

const patchTree = (
    tree: FileTree,
    file: FileInfo,
    patch: Partial<FileInfo>,
): FileTree => {
    if (tree.path.length > file.path.length) {
        return tree;
    }
    if (tree.path === file.path) {
        return {...tree, ...patch};
    }
    return {
        ...tree,
        children: Object.fromEntries(
            Object.entries(tree.children).map(([key, value]) => [
                key,
                patchTree(value, file, patch),
            ]),
        ),
    };
};

export default function useFilesTree() {
    const [filesTree, filesTreeRef, setFilesTree] = useRefState<
        FileTree | undefined
    >(undefined);

    const update = (file: FileInfo, patch: Partial<FileInfo>) => {
        setFilesTree(patchTree(filesTreeRef.current, file, patch));
    };

    return {
        clear: () => setFilesTree(undefined),
        setFilesTree,
        filesTree,
        update,
    };
}
