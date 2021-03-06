import {parse} from 'path';

import {FileInfo} from '@/iterfaces/TinyFile';

export const IMAGES_EXT = ['.jpg', '.jpeg', '.png', '.gif'];

const isImage = (path: string) => {
    const parsedPath = parse(path);
    return IMAGES_EXT.includes(parsedPath.ext);
};

export const isHiddenFile = (name: string) => /^\..*/.test(name);

export const validFile = (file: FileInfo): boolean => {
    return !isHiddenFile(file.name) && (file.isDir || isImage(file.path));
};
