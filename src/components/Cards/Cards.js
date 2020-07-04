import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames';
import CountryPicker from '../ConuntryPicker/CountryPicker';
import './Cards.css'

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading....'
    }
    return(
        <div className="container">
            <Grid container spacing = {3} justify="center">
                <Grid item component={Card} xs={12} md={3} className = {cx('card' , 'infected')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><b>Infected</b></Typography>
                        <hr className="line1"/>
                        <Typography variant="h5">
                            <b><CountUp
                                start = {0}
                                end = {confirmed.value}
                                duration = {5}
                                separator = ","
                            /></b>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx('card' , 'recovered')}>
                    <CardContent>
                   <Typography color="textSecondary" gutterBottom><b>Recoveries</b></Typography>
                        <hr className="line1"/>
                        
                        <Typography variant="h5">
                        <b><CountUp
                                start = {0}
                                end = {recovered.value}
                                duration = {5}
                                separator = ","
                            /></b>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx('card' , 'deaths')}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom><b>Deaths</b></Typography>
                        <hr className="line1"/>
                       
                        <Typography variant="h5">
                        <b><CountUp
                                start = {0}
                                end = {deaths.value}
                                duration = {5}
                                separator = ","
                            /></b>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;
