export enum IcpEvent {
    OpenDialog = 'OpenDialog',
    DownloadImage = 'DownloadImage',
}

export enum IcpProtocol {
    Atom = 'atom',
}

///

export type SaveFileOptions = {
    path: string;
    url: string;
    onProgress: (percent: number) => void;
};

export type SaveFileResponse = {
    error?: string;
    path: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
declare namespace Electron {
    interface IpcRenderer {
        invoke(
            channel: IcpEvent.DownloadImage,
            args: SaveFileOptions,
        ): Promise<SaveFileResponse>;
    }
}
