export type TinyFileInfo = {
    path: string;
    name: string;
    size: number;
    isDir: boolean;
};

export type TinyTreeFileChildren = {
    [name: string]: TinyTreeFile;
};

export type TinyTreeFile = TinyFileInfo & {
    children: TinyTreeFileChildren;
};
