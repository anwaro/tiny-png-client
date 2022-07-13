import {Routes} from '~const/routes';
import {authHeader} from '~utils/fetch';
import {responseToCompressionCount} from '~utils/tiny';

import {usePost} from './fetch';

export const useFetchApiLimit = () => {
    const post = usePost();
    return async (key: string) => {
        const res = await post(Routes.Shrink, {
            headers: authHeader(key),
        }).catch(({response}) => response);
        return responseToCompressionCount(res);
    };
};
