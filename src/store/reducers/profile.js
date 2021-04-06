import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userData: null,
    userStats: null,
    error: false
};

const setToken = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: false
    });
};

const fetchTokenFailed = (state) => {
    return updateObject(state, { error: true });
};

const setUserData = (state, action) => {
    return updateObject(state, {
        userData: action.userData,
        error: false
    });
};

const fetchUserDataFailed = (state) => {
    return updateObject(state, { error: true });
};

const setUserStats = (state, action) => {
    return updateObject(state, {
        userStats: action.userStats,
        error: false
    });
};

const fetchUserStatsFailed = (state) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_TOKEN: return setToken(state, action);
        case actionTypes.FETCH_TOKEN_FAILED: return fetchTokenFailed(state);
        case actionTypes.STORE_USER_DATA: return setUserData(state, action);
        case actionTypes.FETCH_USER_DATA_FAILED: return fetchUserDataFailed(state);
        case actionTypes.STORE_USER_STATS: return setUserStats(state, action);
        case actionTypes.FETCH_USER_STATS_FAILED: return fetchUserStatsFailed(state);
        default:
            return state;
    }
};

export default reducer;