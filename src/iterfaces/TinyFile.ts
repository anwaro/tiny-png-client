export type TinyFile = string;

export type TinyTreeFileChildren = {
    [name: string]: TinyTreeFile;
};

export type TinyTreeFile = {
    path: string;
    name: string;
    size: number;
    isDir: boolean;
    children: TinyTreeFileChildren;
};
