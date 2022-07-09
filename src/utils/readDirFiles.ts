import {FileInfo} from '~types/TinyFile';
import {validFile} from '~utils/filterFiles';
import {readFileInfo} from '~utils/readFile';

const {readdirSync} = window.require('fs');
const {join} = window.require('path');

export const readDirChild = (path: string): string[] =>
    readdirSync(path).map((file: string) => join(path, file));

export const readDirFilesRecursive = (paths: string[]): FileInfo[] => {
    return paths.reduce((accumulator: FileInfo[], path: string) => {
        const file = readFileInfo(path);
        if (!validFile(file)) {
            return accumulator;
        } else if (file.isDir) {
            return [
                ...accumulator,
                file,
                ...readDirFilesRecursive(readDirChild(file.path)),
            ];
        } else {
            return [...accumulator, file];
        }
    }, []);
};
