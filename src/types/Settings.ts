import {ApiKey} from '~types/ApiKey';

const os = window.require('os');

export enum SaveMode {
    Overwrite = 'Overwrite',
    Prefix = 'Prefix',
    Suffix = 'Suffix',
    ContDir = 'ContDir',
    PrefixRoot = 'PrefixRoot',
    SuffixRoot = 'SuffixRoot',
}

export type Prefixes = {
    suffix: string;
    prefix: string;
    rootPrefix: string;
    rootSuffix: string;
    saveDir: string;
};

export const initialPrefixes: Prefixes = {
    suffix: '_compressed',
    prefix: 'compressed_',
    rootSuffix: '_compressed',
    rootPrefix: 'compressed_',
    saveDir: os.homedir(),
};

export type SettingsType = {
    parallelCount: number;
    saveMode: SaveMode;
    activeKey?: string;
    keys: ApiKey[];
    prefixes: Prefixes;
    dashboard: boolean;
};

export const initialSettings: SettingsType = {
    parallelCount: 1,
    saveMode: SaveMode.Suffix,
    activeKey: undefined,
    keys: [],
    prefixes: initialPrefixes,
    dashboard: true,
};
