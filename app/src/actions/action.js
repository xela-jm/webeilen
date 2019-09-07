import {
    HIDE_ALERT,
    REGISTER_USER,
    SHOW_ALERT,
    TOGGLE_ALERT,
    SET_USER_DATA,
    LOG_OUT,
    SHOW_LOGIN,
    HIDE_LOGIN,
    TOGGLE_LOGIN,
    TOGGLE_COLOR,
    TOGGLE_SIZE,
    PAGINATE,
    UPDATE_ITEMS_COLLECTION,
    UPDATE_ITEMS_FILTER,
    UPDATE_ITEMS_FILTERED
} from "./types";
//import {applyMiddleware as dispatch} from "redux";

export const showAlertAction = (message, type) => ({
    type: SHOW_ALERT,
    payload: {message, type}
});

export const showLogin = (message, type) => ({
    type: SHOW_LOGIN,
    payload: {message, type}
});

export const toggleLogin = (message, type) => ({
    type: TOGGLE_LOGIN,
    payload: {message, type}
});

export const hideLogin = (message, type) => ({
    type: HIDE_LOGIN,
    payload: {message, type}
});

export const hideAlertAction = (message, type) => ({
    type: HIDE_ALERT,
    payload: {message, type}
});

export const toggleAlertAction = (message, type) => ({
    type: TOGGLE_ALERT,
    payload: {message, type}
});

export const logOut = (message, type) => ({
    type: LOG_OUT,
    payload: {message, type}
});

export const toggleColor = (message, type) => {
    return ({
        type: TOGGLE_COLOR,
        payload: {message, type}
    });
};

export const toggleSize = (message, type) => {
    return ({
        type: TOGGLE_SIZE,
        payload: {message, type}
    });
};

/*
export const paginateAction = (message, type) => {
    return ({
        type: PAGINATE,
        payload: {message, type}
    });
};
*/

/*export const fetchData = (message, type) => ({
    type: REGISTER_USER,
    payload: { message, type }
});*/

export const paginate = (filter) => {
    return (dispatch) => {
        return fetch('http://localhost:3012/test/test',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filter)
            })
            .then(response => response.json())
            .then(json => {
                dispatch({type: UPDATE_ITEMS_FILTER, data: filter});
                dispatch({type: UPDATE_ITEMS_FILTERED, itemsFiltered: json});
            })
            .catch
            (err => dispatch(
                {type: "ERROR", msg: "Unable to fetch data"})) //TODO: add disptatcher
    }

}

// asynchronous action creator
export const fetchData = (data) => {
    return (dispatch) => {
        return fetch('http://localhost:3012/auth/register',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                    dispatch({type: REGISTER_USER, data: json})
                    dispatch({type: TOGGLE_ALERT, data: json})
                    dispatch({type: SET_USER_DATA, data: json})
                })
            .catch
                (err => dispatch(
                    {type: "ERROR", msg: "Unable to fetch data"})) //TODO: add disptatcher
    }

}

export const login = (data) => {
    return (dispatch) => {
        return fetch('http://localhost:3012/auth/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                dispatch({type: HIDE_LOGIN})
                dispatch({type: SET_USER_DATA, data: json})
            })
            .catch
            (err => dispatch(
                {type: "ERROR", msg: "Unable to fetch data"})) //TODO: add disptatcher
    }

}

export const getProducts = (filter) => {
    //let params = this.state.itemsFilter;

    return (dispatch) => {
        let query = Object.keys(filter)
            .filter(k => filter[k] !== null)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(filter[k]))
            .join('&');

        return fetch('http://localhost:3012/test/test?' + query,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(json => {
                dispatch({type: UPDATE_ITEMS_COLLECTION, filter: filter, items: json.items, total: json.total, pages: json.pages, itemsFiltered: json})
            })
            .catch
            (err => {
                debugger;
            }) //TODO: add disptatcher
    }
}


