import {
    HIDE_ALERT,
    HIDE_LOGIN,
    LOG_OUT,
    REGISTER_USER,
    SET_USER_DATA,
    SHOW_ALERT,
    SHOW_LOGIN,
    TOGGLE_ALERT,
    TOGGLE_COLOR,
    TOGGLE_LOGIN
} from "../actions/types";


const INITIAL_STATE = {
    showAlert: false,
    showLoginAlert: false,
    user: {},
    userDetails: sessionStorage.getItem("userDetails"),
    itemsFilter: {
        color: {
            blue_opt: false,
            red_opt: false,
            yellow_opt: false
        }
    },
    itemsFiltered: {
        total: 100,
        offset: 24,
        items: []
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, showAlert: true};

        case HIDE_ALERT:
            return {...state, showAlert: false};

        case TOGGLE_ALERT:
            return {...state, showAlert: !state.showAlert};

        case REGISTER_USER:
            return {...state, user: action.data}

        case SET_USER_DATA:
            sessionStorage.setItem("userDetails", action.data)
            return {...state, userDetails: action.data}

        case SHOW_LOGIN:
            return {...state, showLoginAlert: true};

        case HIDE_LOGIN:
            return {...state, showLoginAlert: false};

        case TOGGLE_LOGIN:
            return {...state, showLoginAlert: !state.showLoginAlert};

        case TOGGLE_COLOR:
            return {
                ...state,
                itemsFilter: {
                    ...state.itemsFilter,
                    color:
                        {
                            ...state.itemsFilter.color,
                            [action.payload.message]: !state.itemsFilter.color[action.payload.message]
                        }
                }
            }

        case LOG_OUT:
            sessionStorage.removeItem("userDetails")
            return {...state, userDetails: null}


        default:
            return {...state};
    }
}
