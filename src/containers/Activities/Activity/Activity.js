import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';

import classes from './Activity.module.css';
import * as Constants from '../../../constants';
import * as actions from '../../../store/actions/index';
import ActivityInfo from '../../../components/Activity/ActivityInfo/ActivityInfo';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CircularProgress from '@material-ui/core/CircularProgress';

let polyline = require('@mapbox/polyline');

class Activity extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.onFetchUserData(Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFERSH_TOKEN);
        } else {
            const activityId = this.props.location.pathname.split("/")[2];
            this.props.onFetchActivity(this.props.token, activityId);
        }
    }

    componentDidUpdate(prevProps) {
        const activityId = this.props.location.pathname.split("/")[2];
        if (prevProps.token !== this.props.token) {
            this.props.onFetchActivity(this.props.token, activityId);
        }
        if (prevProps.activity.map && (prevProps.activity.map.id !== this.props.activity.map.id)) {
            this.forceUpdate();
        }
    }

    render() {

        let activity = <CircularProgress></CircularProgress>;
        if (!this.props.loading) {
            activity = <CardContent>
                <ActivityInfo {...this.props}></ActivityInfo>
            </CardContent>;
        }

        let map = null;
        if (!this.props.loading && this.props.activity.map) {
            const startCoord = this.props.activity.start_latlng;
            map = <MapContainer
                className={classes.map}
                center={[this.props.activity.start_latlng[0], this.props.activity.start_latlng[1]]}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON key='my-geojson' data={polyline.toGeoJSON(this.props.activity.map.polyline)} />
            </MapContainer>;
        }

        return (
            <div className={classes.root}>
                <Card className={classes.cardRoot}>
                    {activity}
                    <div className={classes.mapParent}>
                        {map}
                    </div>
                </Card>

            </div >
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.prof.token,
        activity: state.activity.activity,
        loading: state.activity.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchActivity: (accessToken, id) => dispatch(actions.getActivity(accessToken, id)),
        onFetchUserData: (clientID, clientSecret, refreshToken) => dispatch(actions.getToken(clientID, clientSecret, refreshToken))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);