import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
//import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import AppBar from "@material-ui/core/AppBar";
import { NavLink } from 'react-router-dom';

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.Title}>
                            <Box fontWeight="fontWeightBold" >
                                Strava Dashboard
                            </Box>
                        </Typography>
                        <Typography variant="h6" className={classes.Title}>
                            <NavLink to="/" activeStyle={classes.Active}>Profile</NavLink>
                        </Typography>
                        <Typography variant="h6" className={classes.Title}>
                            <NavLink to="/activities" activeStyle={classes.Active}>Activities</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;