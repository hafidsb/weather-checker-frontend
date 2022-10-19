import React from 'react';
import CityPicker from './CityPicker';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BoltIcon from '@mui/icons-material/Bolt';

const Home = ({ title }) => {
    return (
        <Card sx={{ minWidth: 700 }}>
            <CardContent>
                <Typography variant="h2" component="div">
                    {title} <WbSunnyIcon fontSize="inherit" />
                </Typography>
            </CardContent>
            <CardContent>
                <Typography sx={{ pb: 2, fontSize: 16 }} color="text.secondary">
                    Choose a city and find out the weather conditions there quickly
                    <BoltIcon style={{verticalAlign:"middle"}} />
                </Typography>
            </CardContent>
            <CityPicker />
        </Card>
    );
}

export default Home;