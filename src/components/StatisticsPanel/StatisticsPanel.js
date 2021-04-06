import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const statisticsPanel = (props) => {
    let { all_ride_totals, all_run_totals, biggest_climb_elevation_gain, biggest_ride_distance,
        ytd_ride_totals, ytd_run_totals } = props;

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                    <DirectionsBikeIcon></DirectionsBikeIcon>
                    <Typography align="center" variant="h6">
                        Cycling
                    </Typography>
                    <TableContainer>
                        <Table aria-label="simple table" size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Number of rides:
                                    </TableCell>
                                    <TableCell align="left">
                                        {props.showYear ? ytd_ride_totals.count : all_ride_totals.count}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Accumulated distance:
                                    </TableCell>
                                    <TableCell align="left">
                                        {props.showYear ? ytd_ride_totals.distance : all_ride_totals.distance} m
                                    </TableCell>
                                </TableRow>
                                {!props.showYear ?
                                    <Aux>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Biggest climb
                                    </TableCell>
                                            <TableCell align="left">
                                                {biggest_climb_elevation_gain} m.n.m
                                    </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Biggest ride distance
                                    </TableCell>
                                            <TableCell align="left">
                                                {biggest_ride_distance} m
                                    </TableCell>
                                        </TableRow>
                                    </Aux>
                                    : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <DirectionsRunIcon></DirectionsRunIcon>
                    <Typography align="center" variant="h6">
                        Running
                    </Typography>
                    <TableContainer>
                        <Table aria-label="simple table" size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Number of runs:
                                    </TableCell>
                                    <TableCell align="left">
                                        {props.showYear ? ytd_run_totals.count : all_run_totals.count}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Accumulated distance:
                                    </TableCell>
                                    <TableCell align="left">
                                        {props.showYear ? ytd_run_totals.distance : all_run_totals.distance} m
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );

};

export default statisticsPanel;