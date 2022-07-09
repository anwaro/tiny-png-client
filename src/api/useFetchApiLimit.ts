import {postAction} from './fetch';

export const useFetchApiLimit = () => {
    return async (key: string) => {
        const res = await postAction('https://api.tinify.com/shrink', {
            headers: {
                Authorization: 'Basic ' + btoa(`api:${key}`),
            },
        }).catch(({response}) => response);
        return parseInt(res.headers['compression-count'] || '-1');
    };
};
