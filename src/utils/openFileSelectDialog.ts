const electron = window.require('electron');

const filesDialogOptions: any = {
    title: 'Select image or directory',
    filters: [{name: 'Images', extensions: ['jpg', 'png', 'jpeg']}],
    properties: ['openFile', 'multiSelections', 'openDirectory'],
};

export const openFileSelectDialog = () => {
    return electron.ipcRenderer.invoke('OPEN_DIALOG', filesDialogOptions);
};

const folderDialogOptions: any = {
    title: 'Select directory',
    properties: ['openDirectory'],
};

export const openDirSelectDialog = () => {
    return electron.ipcRenderer.invoke('OPEN_DIALOG', folderDialogOptions);
};
