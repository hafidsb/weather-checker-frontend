import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AirIcon from '@mui/icons-material/Air';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

const WeatherDisplay = () => {
    const style = {
        topColor: 'linear-gradient(90deg, rgba(72,117,173,1) 0%, rgba(55,128,175,1) 15%, rgba(128,169,207,1) 100%)',
        botColor: 'linear-gradient(90deg, rgba(46,53,72,1) 0%, rgba(138,146,170,1) 88%, rgba(165,167,173,1) 100%)',
    }

    const data = {
        "coord": {
            "lon": 149.1269,
            "lat": -35.2931
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 18.37,
            "feels_like": 18.19,
            "temp_min": 16.83,
            "temp_max": 19.84,
            "pressure": 1019,
            "humidity": 74
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.14,
            "deg": 90
        },
        "clouds": {
            "all": 100
        },
        "dt": 1666227794,
        "sys": {
            "type": 2,
            "id": 2004200,
            "country": "AU",
            "sunrise": 1666206892,
            "sunset": 1666254094
        },
        "timezone": 39600,
        "id": 2172517,
        "name": "Canberra",
        "cod": 200
    }

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    function formatToday() {
        var today = new Date();
        var options = { weekday: 'long', month: 'short', day: 'numeric' };

        return today.toLocaleDateString("en-US", options);
    }

    return (
        <Card sx={{ flexGrow: 1, m: 2, textTransform:'capitalize' }}>
            <Grid container sx={{ background: style.topColor }}>
                <Grid item xs={5}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                    }}>
                        <h3>{data.name}</h3>
                        <h2>{formatAMPM(new Date())}</h2>
                        <p>{formatToday()}</p>
                    </Box>
                </Grid>
                <Divider orientation='vertical' variant='middle' flexItem sx={{ mr: '-1px' }} />
                <Grid item xs={7}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            p: 1,
                            m: 1,
                            borderRadius: 1,
                            width: '100%',
                        }}>
                            <p>{data.main.temp} &deg;C</p>
                            <p>{data.weather[0].description}</p>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            p: 1,
                            m: 1,
                            borderRadius: 1,
                            width: '100%',
                        }}>
                            <p>
                                <VerticalAlignBottomIcon sx={{verticalAlign:'middle'}} />
                                {data.main.temp_min} &deg;C
                            </p>
                            <p>
                                <VerticalAlignTopIcon sx={{verticalAlign:'middle'}} />
                                {data.main.temp_max} &deg;C
                            </p>
                        </Box>  
                    </Box>
                </Grid>
                <Grid container sx={{ background: style.botColor, textTransform:'lowercase' }}>
                    <Grid item xs={12}>
                        <h3>
                            <AirIcon sx={{verticalAlign:'middle', fontSize:'inherit'}} />
                            {data.wind.speed} m/s
                        </h3>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default WeatherDisplay;