import axios from 'axios';

import {useActiveKey} from '~providers/AppProvider';

import {authHeader, fetchHeaders, FetchRequestInit} from '~utils/fetch';
import {resolveUrl} from '~utils/url';

export const fetchAction = async (
    url: string,
    {
        headers,
        queryParams,
        bindParams,
        baseUrl,
        method = 'GET',
        ...params
    }: FetchRequestInit = {},
) => {
    const options = {
        ...params,
        url: resolveUrl(baseUrl, url, queryParams, bindParams),
        method,
        redirect: 'follow',
        ...fetchHeaders({headers}),
    };

    return axios(options);
};

export function useApiCall(method: string) {
    const {activeKey} = useActiveKey();
    return async (url: string, options: FetchRequestInit = {}) =>
        await fetchAction(url, {
            headers: {
                ...authHeader(activeKey.key),
                ...options.headers,
            },
            ...options,
            method,
        });
}

export function useGet() {
    return useApiCall('GET');
}

export function usePost() {
    return useApiCall('POST');
}
