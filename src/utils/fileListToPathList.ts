export const fileListToPathList = (fileList: FileList) => {
    return [...fileList].map((file) => file.path);
};
