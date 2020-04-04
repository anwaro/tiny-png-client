import {remote, OpenDialogOptions} from 'electron';

const options: OpenDialogOptions = {
    title: 'Select image or directory',
    filters: [{name: 'Images', extensions: ['jpg', 'png', 'jpeg']}],
    properties: ['openFile', 'multiSelections', 'openDirectory'],
};

export const openFileSelectDialog = () => {
    return remote.dialog
        .showOpenDialog(options)
        .then((result) => {
            return result.filePaths;
        })
        .catch(() => {
            return [];
        });
};
