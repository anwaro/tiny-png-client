import {dialog, ipcMain, OpenDialogOptions, OpenDialogReturnValue} from 'electron';

import {IcpEvent} from './types';

export default function setupDialog() {
    ipcMain.handle(IcpEvent.OpenDialog, async (e, options: OpenDialogOptions) => {
        return dialog
            .showOpenDialog(options)
            .then((result: OpenDialogReturnValue) => {
                return result.filePaths;
            })
            .catch(() => {
                return [] as string[];
            });
    });
}
