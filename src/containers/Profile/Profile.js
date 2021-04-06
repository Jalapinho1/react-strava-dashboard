import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Statistics from '../Statistics/Statistics';
import * as actions from '../../store/actions/index';
import * as Constants from '../../constants';

import classes from './Profile.module.css';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Profile extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.onFetchUserToken(Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFERSH_TOKEN);
        } else if (!this.props.userData) {
            this.props.onFetchUserData(this.props.token);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            console.log('Component UPDATESD');
            this.props.onFetchUserData(this.props.token);
        } else if (prevProps.userData !== this.props.userData) {
            this.props.onFetchUserStats(this.props.token, this.props.userData.id);
        }
    }

    render() {
        let userPicUrl = '';
        let firstname = '';
        let lastname = '';
        let city = '';
        let country = '';
        let weight = '';
        let memberSince = '';
        if (this.props.userData) {
            userPicUrl = this.props.userData.profile;
            firstname = this.props.userData.firstname;
            lastname = this.props.userData.lastname;
            city = this.props.userData.city;
            country = this.props.userData.country;
            weight = this.props.userData.weight;
            memberSince = new Date(this.props.userData.created_at).getFullYear();
        }
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    {firstname + " " + lastname}
                                </Typography>
                                <Avatar alt="Remy Sharp" src={`${userPicUrl}`} className={classes.profilePicture} />
                                <Typography className={classes.profileText} color="textSecondary" gutterBottom>
                                    City: {city}<br />
                                    Country: {country}<br />
                                    Weight: {weight}<br />
                                    Member since: {memberSince}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={9}>
                        {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */}
                        {this.props.userStats ? <Statistics {...this.props.userStats}></Statistics> : null}
                    </Grid>
                </Grid>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.prof.token,
        userData: state.prof.userData,
        userStats: state.prof.userStats
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUserData: (token) => dispatch(actions.getUserData(token)),
        onFetchUserStats: (token, id) => dispatch(actions.getUserStats(token, id)),
        onFetchUserToken: (clientID, clientSecret, refreshToken) => dispatch(actions.getToken(clientID, clientSecret, refreshToken)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile, axios);