import {Routes} from '~const/routes';
import {ApiResponse} from '~types/ApiResponse';
import useUpdateActiveKey from '~utils/tiny';

import {usePost} from './fetch';

export const usePostOptimizeImage = () => {
    const post = usePost();
    const updateActiveKey = useUpdateActiveKey();
    return async (
        data: FormData,
        onProgress: (progress: number) => void,
    ): Promise<ApiResponse> => {
        const res = await post(Routes.Shrink, {
            data,
            onUploadProgress: (e: ProgressEvent) => onProgress(e.loaded / e.total),
        });
        updateActiveKey(res);
        return res.data;
    };
};
