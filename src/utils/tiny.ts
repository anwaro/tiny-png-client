import {AxiosResponse} from 'axios';

import {useActiveKey, useApiKeys} from '~providers/AppProvider';

export const responseToCompressionCount = (res: AxiosResponse) => {
    return parseInt(res.headers['compression-count'] || '-1');
};

export default function useUpdateActiveKey() {
    const {activeKey} = useActiveKey();
    const {updateKey} = useApiKeys();

    return (res: AxiosResponse) => {
        const compressionCount = responseToCompressionCount(res);
        if (compressionCount >= 0) {
            updateKey({
                ...activeKey,
                compressionCount,
            });
        }
    };
}
