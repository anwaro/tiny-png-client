import {useMemo} from 'react';

import {Status} from '~const/status';

export const useShowButton = (showed: boolean, status: Status) => {
    return useMemo(
        () => ({
            cancel: showed,
            start: showed && status === Status.Paused,
            pause: showed && status === Status.Processing,
        }),
        [showed, status],
    );
};
