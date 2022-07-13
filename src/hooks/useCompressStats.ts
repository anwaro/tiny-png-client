import {useMemo} from 'react';

import {FileInfo} from '~types/TinyFile';
import {humanFileSize} from '~utils/file';

export default function useCompressStats(file: FileInfo) {
    return useMemo(() => {
        return {
            size: humanFileSize(file.size, 1),
            optimizedSize: humanFileSize(file.optimizedSize, 1),
            percent: Math.round(
                ((file.size - file.optimizedSize) / file.size) * 100,
            ),
        };
    }, [file]);
}
