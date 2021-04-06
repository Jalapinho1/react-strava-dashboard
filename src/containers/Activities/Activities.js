import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ActivityCard from '../../components/Activity/ActivityCard/ActivityCard';
import Activity from './Activity/Activity';

import classes from './Activities.module.css';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as Constants from '../../constants';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { isWidthUp } from '@material-ui/core/withWidth';

class Activities extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.onFetchUserData(Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFERSH_TOKEN);
        } else if (this.props.activities.length === 0) {
            this.props.onFetchActivities(this.props.token);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            console.log('Component UPDATESD');
            this.props.onFetchActivities(this.props.token);
        }
    }

    getGridListCols = () => {
        if (isWidthUp('xl', this.props.width)) {
            return 4;
        }
        if (isWidthUp('lg', this.props.width)) {
            return 3;
        }
        if (isWidthUp('md', this.props.width)) {
            return 2;
        }

        return 1;
    }

    render() {
        let activities = null;
        if (!this.props.loading) {
            activities = this.props.activities.map((activity) => (
                <GridListTile key={activity.id} cols={activity.cols || 1}>
                    <ActivityCard {...activity}></ActivityCard>
                </GridListTile>
            ))
        }
        return (
            <Aux>
                {this.props.loading ? <CircularProgress></CircularProgress> : null}
                <Grid container>
                    <GridList className={classes.root} cols={3}>
                        {!this.props.loading ? activities : ""}
                    </GridList>
                </Grid>
                
            </Aux>
        );
    }
};


const mapStateToProps = state => {
    return {
        token: state.prof.token,
        activities: state.activities.activities,
        loading: state.activities.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchActivities: (accessToken) => dispatch(actions.getActivities(accessToken)),
        onFetchUserData: (clientID, clientSecret, refreshToken) => dispatch(actions.getToken(clientID, clientSecret, refreshToken))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities, axios);
