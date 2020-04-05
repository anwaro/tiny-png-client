import {lstatSync} from 'fs';

import {parse} from 'path';

import {TinyFileInfo} from '@/iterfaces/TinyFile';

export const readFileInfo = (path: string): TinyFileInfo => {
    const pathInfo = lstatSync(path);
    const parsedPath = parse(path);
    return {
        path: path,
        name: parsedPath.base,
        size: pathInfo.size,
        isDir: pathInfo.isDirectory(),
    };
};
