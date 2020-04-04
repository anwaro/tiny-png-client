import { NotificationObject } from "../../iterfaces/Notification";

import * as ACTIONS from "./types";

export const setMenuOpen = (menuOpen: boolean) => ({
  payload: { menuOpen },
  type: ACTIONS.SET_MENU_IS_OPEN,
});

export const setNotification = (notification: Partial<NotificationObject>) => ({
  payload: { notification },
  type: ACTIONS.SET_NOTIFICATION,
});
