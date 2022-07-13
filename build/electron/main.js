"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Entry point of the Election app.
 */
var path_1 = require("path");
var electron_1 = require("electron");
var electron_devtools_installer_1 = __importStar(require("electron-devtools-installer"));
var ipc_1 = __importDefault(require("../src/ipc"));
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
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
    if (electron_1.app.isPackaged) {
        // 'build/index.html'
        mainWindow.loadURL("file://".concat(__dirname, "/index.html"));
    }
    else {
        mainWindow.loadURL('http://localhost:3000/index.html');
        mainWindow.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: (0, path_1.join)(__dirname, '..', '..', 'node_modules', '.bin', 'electron' + (process.platform === 'win32' ? '.cmd' : '')),
            forceHardReset: true,
            hardResetMethod: 'exit',
        });
    }
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.whenReady().then(function () {
    (0, electron_devtools_installer_1.default)(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS).catch(function () { });
    createWindow();
    (0, ipc_1.default)();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    electron_1.app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
});
//# sourceMappingURL=main.js.map