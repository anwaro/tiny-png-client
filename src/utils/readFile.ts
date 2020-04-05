import {lstatSync} from 'fs';

import {parse} from 'path';

import {FileInfo} from '@/iterfaces/TinyFile';

export const readFileInfo = (path: string): FileInfo => {
    const pathInfo = lstatSync(path);
    const parsedPath = parse(path);
    return {
        path: path,
        name: parsedPath.base,
        size: pathInfo.size,
        isDir: pathInfo.isDirectory(),
    };
};
