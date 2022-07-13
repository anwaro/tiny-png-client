import axios from 'axios';
import {ipcMain} from 'electron';

import {IcpEvent, SaveFileOptions} from './types';

const {createWriteStream, mkdirSync, existsSync} = require('fs');
const {parse} = require('path');

export default function setupFile() {
    ipcMain.handle(IcpEvent.DownloadImage, async (e, options: SaveFileOptions) => {
        const res = await axios(options.url, {responseType: 'stream'});
        const {dir} = parse(options.path);
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }
        const writer = createWriteStream(options.path);
        res.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    });
}
