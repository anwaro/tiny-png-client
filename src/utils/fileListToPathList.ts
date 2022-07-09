import {FileWithPath} from '~types/Image';

export const fileListToPathList = (fileList: FileList) => {
    return Array.from(fileList).map((file) => (file as FileWithPath).path);
};
