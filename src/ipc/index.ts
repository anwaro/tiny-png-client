import setupDialog from './dialog';
import setupFile from './file';
import setupImageProtocol from './image-protocol';

export default function setupIpc() {
    setupImageProtocol();
    setupDialog();
    setupFile();
}
