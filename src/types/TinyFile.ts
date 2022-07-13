export enum FileStatus {
    NotOptimized = 'NotOptimized',
    InProgress = 'InProgress',
    Error = 'Error',
    Optimized = 'Optimized',
    Dir = 'Dir',
}

export type FileInfo = {
    path: string;
    selectedPath: string;
    name: string;
    size: number;
    isDir: boolean;
    status: FileStatus;
    optimizedSize: number;
    progress: number;
    error: string;
};

export type FileChildren = {
    [name: string]: FileTree;
};

export type FileTree = FileInfo & {
    children: FileChildren;
};
