import {AxiosRequestConfig} from 'axios';

import {QueryParamsType} from './url';

// eslint-disable-next-line no-undef
export type FetchRequestInit = AxiosRequestConfig & {
    queryParams?: QueryParamsType;
    bindParams?: QueryParamsType;
    baseUrl?: string;
};

export type FetchHeaders = Pick<FetchRequestInit, 'headers'>;

export const fetchHeaders = ({headers}: FetchHeaders) => {
    const hasContentType = Object.keys(headers || {}).find(
        (f) => f.toLowerCase() === 'content-type',
    );
    return {
        headers: {
            ...(!hasContentType ? {'Content-Type': 'application/json'} : {}),
            ...headers,
        },
    };
};

export const authHeader = (token?: string) => ({
    Authorization: 'Basic ' + btoa(`api:${token}`),
});
