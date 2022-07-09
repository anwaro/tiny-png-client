export type Image = {
    id: number;
    contentUrl: string;
};

export type FileWithPath = File & {
    path: string;
};
