import {HIDE_ALERT, SHOW_ALERT, TOGGLE_ALERT} from "./types";

export const showAlertAction = (message, type) => ({
    type: SHOW_ALERT,
    payload: { message, type }
});

export const hideAlertAction = (message, type) => ({
    type: HIDE_ALERT,
    payload: { message, type }
});

export const toggleAlertAction = (message, type) => ({
    type: TOGGLE_ALERT,
    payload: { message, type }
});