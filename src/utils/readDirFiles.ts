import {readdirSync} from 'fs';

import {join} from 'path';

import {TinyFileInfo} from '@/iterfaces/TinyFile';
import {validFile} from '@utils/filterFiles';
import {readFileInfo} from '@utils/readFile';

export const readDirChild = (path: string): string[] =>
    readdirSync(path).map((file) => join(path, file));

export const readDirFilesRecursive = (paths: string[]): TinyFileInfo[] => {
    return paths.reduce((accumulator: TinyFileInfo[], path: string) => {
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
