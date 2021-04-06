import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setToken = (token) => {
    return {
        type: actionTypes.STORE_TOKEN,
        token: token
    };
};

export const fetchTokenFailed = () => {
    return {
        type: actionTypes.FETCH_TOKEN_FAILED
    };
};

export const getToken = (clientID, clientSecret, refreshToken) => {
    return dispatch => {
        axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            .then(response => {
                dispatch(setToken(response.data.access_token));
            })
            .catch(error => {
                dispatch(fetchTokenFailed());
            });
    };
};

export const setUserData = (userData) => {
    return {
        type: actionTypes.STORE_USER_DATA,
        userData: userData
    };
};

export const fetchUserDataFailed = () => {
    return {
        type: actionTypes.FETCH_USER_DATA_FAILED
    };
};

export const getUserData = (token) => {
    return dispatch => {
        axios.get('https://www.strava.com/api/v3/athlete?access_token=' + token)
            .then(response => {
                dispatch(setUserData(response.data));
            })
            .catch(error => {
                dispatch(fetchUserDataFailed());
            });
    };
};

export const setUserStats = (userStats) => {
    return {
        type: actionTypes.STORE_USER_STATS,
        userStats: userStats
    };
};

export const fetchUserStatsFailed = () => {
    return {
        type: actionTypes.FETCH_USER_STATS_FAILED
    };
};

export const getUserStats = (token, id) => {
    return dispatch => {
        axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats?access_token=` + token)
            .then(response => {
                dispatch(setUserStats(response.data));
            })
            .catch(error => {
                dispatch(fetchUserStatsFailed());
            });
    };
};