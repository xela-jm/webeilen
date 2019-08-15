import {HIDE_ALERT, SHOW_ALERT, TOGGLE_ALERT} from "../actions/types";

const INITIAL_STATE = {
    showAlert: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, showAlert: true};

        case HIDE_ALERT:
            return {...state, showAlert: false};

        case TOGGLE_ALERT:
            return {...state, showAlert: !state.showAlert};

        default:
            return {...state};
    }
}