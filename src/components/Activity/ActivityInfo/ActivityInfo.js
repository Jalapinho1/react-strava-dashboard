import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { toTimeString, metresToKm} from '../../../hoc/Utils/Utils';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const activityInfo = (props) => {
    return (
        <Aux>
            <Typography component="div" color="textPrimary" fontWeight="fontWeightBold" gutterBottom>
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                    {props.activity.name}
                </Box>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>Distance: {metresToKm(props.activity.distance)}km</Grid>
                <Grid item xs={6} sm={4}>Moving Time: {toTimeString(props.activity.moving_time)}</Grid>
                <Grid item xs={6} sm={4}>Elevation: {props.activity.total_elevation_gain}m</Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                    <TableContainer>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">Avg</TableCell>
                                    <TableCell align="center">Max</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Speed:
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.average_speed}km/h
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.max_speed}km/h
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Heart Rate:
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.average_heartrate}bpm
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.max_heartrate}bpm
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Cadence:
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.average_cadence}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Calories:
                                    </TableCell>
                                    <TableCell align="center">
                                        {props.activity.calories}kcal
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Elapsed time:
                                    </TableCell>
                                    <TableCell align="center">
                                        {toTimeString(props.activity.elapsed_time)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Aux>
    );
}

export default activityInfo;