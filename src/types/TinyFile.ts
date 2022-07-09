export type FileInfo = {
    path: string;
    name: string;
    size: number;
    isDir: boolean;
};

export type FileChildren = {
    [name: string]: FileTree;
};

export type FileTree = FileInfo & {
    children: FileChildren;
};
