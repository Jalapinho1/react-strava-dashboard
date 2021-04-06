import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    activities: [],
    loading: false,
    error: false
};

const fetchActivitiesStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchActivitiesSuccess = (state, action) => {
    return updateObject(state, {
        activities: action.activities,
        error: false,
        loading: false
    });
};

const fetchActivitiesFailed = (state) => {
    return updateObject(state, { error: true, loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACTIVITIES_START: return fetchActivitiesStart(state, action);
        case actionTypes.GET_ACTIVITIES: return fetchActivitiesSuccess(state, action);
        case actionTypes.FETCH_ACTIVITIES_FAILED: return fetchActivitiesFailed(state);
        default:
            return state;
    }
};

export default reducer;