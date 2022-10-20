import React from 'react';
import CityPicker from './CityPicker';
import WeatherDisplay from './WeatherDisplay';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BoltIcon from '@mui/icons-material/Bolt';

const Homepage = ({ title }) => {
    return (
        <Card sx={{ minWidth: 700, margin:4 }}>
            <CardContent>
                <Typography variant="h2" component="div">
                    {title} <WbSunnyIcon sx={{verticalAlign:"middle"}} fontSize="inherit" />
                </Typography>
            </CardContent>
            <CardContent>
                <Typography sx={{ pb: 2, fontSize: 16 }} color="text.secondary">
                    Choose a city and find out the weather conditions there quickly
                    <BoltIcon sx={{verticalAlign:"middle"}} />
                </Typography>
            </CardContent>
            <CityPicker />
            <WeatherDisplay />
        </Card>
    );
}

export default Homepage;