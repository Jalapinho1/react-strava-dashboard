import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import { StylesProvider } from "@material-ui/core/styles";

import classes from './Statistics.module.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StatisticsPanel from '../../components/StatisticsPanel/StatisticsPanel';

class Statistics extends Component {
    state = {
        showYear: false
    }

    onButtonClickHandler = (showYear) => {
        if (showYear !== this.state.showYear) {
            this.setState(prevState => {
                return { showYear: !prevState.showYear };
            });
        }
    }

    render() {
        const buttonAllColor = this.state.showYear ? 'outlined' : 'contained';
        const buttonYearColor = this.state.showYear ? 'contained' : 'outlined';

        return (
            <Aux>
                <StylesProvider injectFirst>
                    <Card className={classes.card}>
                        <div>
                            <Button
                                className={classes.yearButton}
                                variant={buttonAllColor}
                                color="primary"
                                onClick={() => this.onButtonClickHandler(false)}>
                                All Time
                            </Button>
                            <Button
                                className={classes.yearButton}
                                variant={buttonYearColor}
                                color="primary"
                                onClick={() => this.onButtonClickHandler(true)}>
                                Year {new Date().getFullYear()}
                            </Button>
                        </div>
                        <CardContent>
                            <StatisticsPanel {...this.props} showYear={this.state.showYear} />
                        </CardContent>
                    </Card>
                </StylesProvider>
            </Aux>
        );
    }
};

export default Statistics;