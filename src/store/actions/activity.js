import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchActivityStart = () => {
    return{
        type: actionTypes.FETCH_ACTIVITY_START
    };
};

export const setActivity = (activity) => {
    return {
        type: actionTypes.GET_ACTIVITY,
        activity: activity
    };
};

export const fetchActivityFailed = () => {
    return {
        type: actionTypes.FETCH_ACTIVITY_FAILED
    };
};



export const getActivity = (token, id) => {
    return dispatch => {
        dispatch(fetchActivityStart());
        axios.get('https://www.strava.com/api/v3/activities/' + id + '?access_token=' + token)
            .then(response => {
                dispatch(setActivity(response.data));
            })
            .catch(error => {
                dispatch(fetchActivityFailed());
            });
    };
};