import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchActivitiesStart = () => {
    return{
        type: actionTypes.FETCH_ACTIVITIES_START
    };
};

export const setActivities = (activities) => {
    return {
        type: actionTypes.GET_ACTIVITIES,
        activities: activities
    };
};

export const fetchActivitiesFailed = () => {
    return {
        type: actionTypes.FETCH_ACTIVITIES_FAILED
    };
};



export const getActivities = (token) => {
    return dispatch => {
        dispatch(fetchActivitiesStart());
        axios.get('https://www.strava.com/api/v3/athlete/activities?access_token=' + token)
            .then(response => {
                dispatch(setActivities(response.data));
            })
            .catch(error => {
                dispatch(fetchActivitiesFailed());
            });
    };
};