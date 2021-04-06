import React from 'react';

import { Link } from 'react-router-dom';

import classes from './ActivityCard.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const activityCard = (props) => {

    let icon = null;
    switch (props.type) {
        case "Run":
            icon = <DirectionsRunIcon />;
            break;
        case "Hike":
            icon = <FilterHdrIcon />;
            break;
        case "Cycling":
            icon = <DirectionsBikeIcon />;
            break;
        case "Workout":
            icon = <FitnessCenterIcon />;
            break;
        default:
            icon = <SportsEsportsIcon />;
    }

    return (
        <Aux>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        {icon}
                        <div>{props.name} </div>
                        <div>{Math.round(props.moving_time / 60 * 10) / 10} minutes</div>
                        <div>{props.distance} metres</div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={'/activities/' + props.id}>
                        Open Activity
                    </Button>
                </CardActions>
            </Card>
        </Aux>
    );

};

export default activityCard;