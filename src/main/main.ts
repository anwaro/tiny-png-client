/**
 * Entry point of the Election app.
 */
import Electron, {app, BrowserWindow} from 'electron';
import installExtension, {REACT_DEVELOPER_TOOLS} from 'electron-devtools-installer';
import {join} from 'path';
import {format} from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            // devTools: process.env.NODE_ENV === 'production' ? false : true
            devTools: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadURL(
        format({
            pathname: join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true,
        }),
    );

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.webContents.openDevTools();
    installExtension(REACT_DEVELOPER_TOOLS);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
