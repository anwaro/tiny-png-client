import {Prefixes, SaveMode} from '~types/Settings';

const {parse, basename, join} = window.require('path');

export const filePathParts = (path: string, basePath?: string) => {
    const info = parse(path);

    return {
        file: info.base,
        name: info.name,
        ext: info.ext,
        dirPath: info.dir,
        dirName: basename(info.dir),
        basePath: basePath || info.dir,
        basePathName: basePath ? basename(basePath) : basename(info.dir),
    };
};

export const resolveFilePath = (
    prefixes: Prefixes,
    saveMode: SaveMode,
    path: string,
    selectedPath?: string,
) => {
    const {dirPath, file, name, ext, basePathName, basePath} = filePathParts(
        path,
        selectedPath,
    );
    switch (saveMode) {
        case SaveMode.Prefix:
            return join(dirPath, `${prefixes.prefix}${file}`);
        case SaveMode.Suffix:
            return join(dirPath, `${name}${prefixes.suffix}${ext}`);
        case SaveMode.PrefixRoot:
            return path.replace(
                basePath,
                basePath.replace(
                    new RegExp(`${basePathName}$`),
                    `${prefixes.rootPrefix}${basePathName}`,
                ),
            );
        case SaveMode.SuffixRoot:
            return path.replace(
                basePath,
                basePath.replace(
                    new RegExp(`${basePathName}$`),
                    `${basePathName}${prefixes.rootSuffix}`,
                ),
            );
        case SaveMode.ContDir:
            return join(prefixes.saveDir, path.replace(basePath, ''));
        case SaveMode.Overwrite:
        default:
            return path;
    }
};

export const humanFileSize = (bytes: number, decimals = 2, sep = '') => {
    const sizes = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = Math.floor((`${bytes}`.length - 1) / 3);
    const size = (bytes / Math.pow(1024, factor)).toFixed(decimals);
    return `${size}${sep}${sizes[factor]}`;
};
