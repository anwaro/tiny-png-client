import {FileInfo} from '~types/TinyFile';

const {lstatSync} = window.require('fs');
const {parse} = window.require('path');

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
