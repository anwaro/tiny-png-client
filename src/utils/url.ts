import {objectHas} from './object';

export type QueryParamsType = Record<
    string,
    string | boolean | Date | number | undefined | null
>;

export const createUrl = (baseUrl: string | undefined, path: string) => {
    if (/https?:/.test(path)) {
        return path;
    }
    return [(baseUrl || '').replace(/\/$/, ''), path.replace(/^\//, '')].join('/');
};

export const resolveUrl = (
    baseUrl: string | undefined,
    path: string,
    queryParams: QueryParamsType = {},
    bindParams: QueryParamsType = {},
) => {
    const url = new URL(createUrl(baseUrl, bindUrlParams(path, bindParams)));
    if (queryParams) {
        Object.entries(queryParams).forEach(([name, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(name, value.toString());
            }
        });
    }
    return url.href;
};

export const bindUrlParams = (route: string, params: QueryParamsType) => {
    return route.replace(/:(\w+)/g, (_, key) =>
        objectHas(params, key) ? params[key]?.toString() || '' : '',
    );
};
