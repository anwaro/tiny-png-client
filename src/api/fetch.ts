import axios from 'axios';

import {fetchHeaders, FetchRequestInit} from '~utils/fetch';
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

export const postAction = async (url: string, options: FetchRequestInit = {}) =>
    await fetchAction(url, {...options, method: 'POST'});
