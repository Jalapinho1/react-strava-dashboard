import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Activity from './containers/Activities/Activity/Activity';
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';
import Activities from './containers/Activities/Activities';

import * as actions from './store/actions/index';
import * as Constants from './constants';

class App extends Component {

  componentDidMount() {
    this.props.onFetchUserToken(Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFERSH_TOKEN);
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/activities" exact component={Activities}></Route>
            <Route path="/activities/:activityId" component={Activity}></Route>
            <Route path="/" component={Profile}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </Layout>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserToken: (clientID, clientSecret, refreshToken) => dispatch(actions.getToken(clientID, clientSecret, refreshToken))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));