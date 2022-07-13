import useOptimizeImagePath from '~hooks/useOptimizeImagePath';
import {IcpEvent, SaveFileResponse} from '~ipc/types';
import {ApiResponse} from '~types/ApiResponse';
import {FileInfo} from '~types/TinyFile';

const electron = window.require('electron');

export default function useDownloadImage() {
    const resolvePath = useOptimizeImagePath();
    return async (
        file: FileInfo,
        response: ApiResponse,
    ): Promise<SaveFileResponse> => {
        return await electron.ipcRenderer.invoke(IcpEvent.DownloadImage, {
            url: response.output.url,
            path: resolvePath(file.path, file.selectedPath),
        });
    };
}
