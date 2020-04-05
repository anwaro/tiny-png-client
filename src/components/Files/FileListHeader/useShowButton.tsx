import {useEffect, useState} from 'react';

import {Status} from '@/const/status';

export const useShowButton = (status: number) => {
    const [showBtn, setShowBtn] = useState({
        cancel: false,
        start: false,
        pause: false,
    });

    useEffect(() => {
        switch (status) {
            case Status.Ready: {
                setShowBtn({
                    cancel: true,
                    start: true,
                    pause: false,
                });
                break;
            }
            case Status.Paused: {
                setShowBtn({
                    cancel: true,
                    start: true,
                    pause: false,
                });
                break;
            }
            case Status.Processing: {
                setShowBtn({
                    cancel: true,
                    start: false,
                    pause: true,
                });
                break;
            }
            default: {
                setShowBtn({
                    cancel: false,
                    start: false,
                    pause: false,
                });
                break;
            }
        }
    }, [status]);

    return showBtn;
};
