import {useEffect, useState} from 'react';

import {Status} from '~const/status';
import useCurrentProcessedFile from '~hooks/useCurrentProcessedFile';
import useFilesTree from '~hooks/useFilesTree';
import useOptimizeImage from '~hooks/useOptimizeImage';
import {useApp} from '~providers/AppProvider';
import {FileStatus} from '~types/TinyFile';
import {flatListToTree} from '~utils/flatListToTree';

export default function useTinyService() {
    const {settings} = useApp();
    const [status, setStatus] = useState(Status.Paused);
    const {filesTree, setFilesTree, update, clear} = useFilesTree();
    const files = useCurrentProcessedFile(filesTree);
    const optimizeFile = useOptimizeImage();

    const processFiles = (files: string[]) => {
        if (files.length) {
            setFilesTree(flatListToTree(files));
            setStatus(Status.Paused);
        }
    };

    const startNextFile = () => {
        if (
            status === Status.Processing &&
            files[FileStatus.NotOptimized].length &&
            settings.parallelCount > files[FileStatus.InProgress].length
        ) {
            optimizeFile(files[FileStatus.NotOptimized][0], update);
        }
    };

    useEffect(() => {
        startNextFile();
    }, [settings, files, status]);

    return {
        cancel: clear,
        status,
        setStatus,
        filesTree,
        processFiles,
    };
}
