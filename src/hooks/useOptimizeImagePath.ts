import {useCallback} from 'react';

import {usePrefixes, useSaveMode} from '~providers/AppProvider';
import {resolveFilePath} from '~utils/file';

export default function useOptimizeImagePath() {
    const {prefixes} = usePrefixes();
    const {saveMode} = useSaveMode();

    return useCallback(
        (path: string, selectedPath?: string) =>
            resolveFilePath(prefixes, saveMode, path, selectedPath),
        [saveMode, prefixes],
    );
}
