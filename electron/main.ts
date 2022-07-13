/**
 * Entry point of the Election app.
 */
import {join} from 'path';

import Electron, {app, BrowserWindow} from 'electron';
import installExtension, {REACT_DEVELOPER_TOOLS} from 'electron-devtools-installer';

import setupIpc from '../src/ipc';

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 600,
        minWidth: 500,
        maxWidth: 700,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            contextIsolation: false,
            devTools: process.env.NODE_ENV !== 'production',
            // devTools: true,
        },
    });

    // and load the index.html of the app.
    if (app.isPackaged) {
        // 'build/index.html'
        mainWindow.loadURL(`file://${__dirname}/index.html`);
    } else {
        mainWindow.loadURL('http://localhost:3000/index.html');

        mainWindow.webContents.openDevTools();

        require('electron-reload')(__dirname, {
            electron: join(
                __dirname,
                '..',
                '..',
                'node_modules',
                '.bin',
                'electron' + (process.platform === 'win32' ? '.cmd' : ''),
            ),
            forceHardReset: true,
            hardResetMethod: 'exit',
        });
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    installExtension(REACT_DEVELOPER_TOOLS).catch(() => {});
    createWindow();
    setupIpc();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});
