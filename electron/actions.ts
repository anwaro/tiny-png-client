import {normalize} from 'path';

import {
    dialog,
    ipcMain,
    OpenDialogOptions,
    OpenDialogReturnValue,
    protocol,
} from 'electron';

export const setupActions = () => {
    ipcMain.handle('OPEN_DIALOG', async (e, options: OpenDialogOptions) => {
        return dialog
            .showOpenDialog(options)
            .then((result: OpenDialogReturnValue) => {
                return result.filePaths;
            })
            .catch(() => {
                return [] as string[];
            });
    });

    protocol.registerFileProtocol('atom', (request, callback) => {
        const url = request.url.substr(7);
        callback(decodeURI(normalize(url)));
    });
};
