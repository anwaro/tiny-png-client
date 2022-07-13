import {FileInfo, FileStatus} from '~types/TinyFile';

const {lstatSync} = window.require('fs');
const {parse} = window.require('path');

export const readFileInfo = (path: string, selected?: string): FileInfo => {
    const pathInfo = lstatSync(path);
    const parsedPath = parse(path);
    const isDir = pathInfo.isDirectory();
    const selectedPath = selected || (isDir ? path : parsedPath.dir);
    return {
        selectedPath,
        path: path,
        name: parsedPath.base,
        size: pathInfo.size,
        isDir,
        status: isDir ? FileStatus.Dir : FileStatus.NotOptimized,
        optimizedSize: -1,
        error: '',
        progress: 0,
    };
};
