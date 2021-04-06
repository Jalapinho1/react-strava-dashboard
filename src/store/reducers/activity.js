import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    activity: {},
    loading: false
};

const fetchActivityStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchActivitySuccess = (state, action) => {
    return updateObject(state, {
        activity: action.activity,
        error: false,
        loading: false
    });
};

const fetchActivityFailed = (state) => {
    return updateObject(state, { error: true, loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVITY_START: return fetchActivityStart(state, action);
        case actionTypes.GET_ACTIVITY: return fetchActivitySuccess(state, action);
        case actionTypes.FETCH_ACTIVITY_FAILED: return fetchActivityFailed(state);
        default:
            return state;
    }
};

export default reducer;