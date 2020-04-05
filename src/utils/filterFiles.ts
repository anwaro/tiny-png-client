import {parse} from 'path';

import {TinyFileInfo} from '@/iterfaces/TinyFile';

export const IMAGES_EXT = ['.jpg', '.jpeg', '.png', '.gif'];

const isImage = (path: string) => {
    const parsedPath = parse(path);
    return IMAGES_EXT.includes(parsedPath.ext);
};

export const validFile = (file: TinyFileInfo): boolean => {
    return file.isDir || isImage(file.path);
};
