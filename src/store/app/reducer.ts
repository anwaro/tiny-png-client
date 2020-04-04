import {initNotification, NotificationObject} from '@/iterfaces/Notification';

import * as ACTIONS from './types';

export type AppStore = {
    menuOpen: boolean;
    notification: NotificationObject;
};

export type Action = {
    type: string;
    payload: Partial<AppStore>;
};

export const initialState: AppStore = {
    menuOpen: false,
    notification: initNotification,
};

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTIONS.SET_MENU_IS_OPEN: {
            return {...state, menuOpen: action.payload.menuOpen};
        }
        case ACTIONS.SET_NOTIFICATION: {
            return {
                ...state,
                notification: {
                    ...state.notification,
                    ...action.payload.notification,
                },
            };
        }
        default:
            return state;
    }
};
