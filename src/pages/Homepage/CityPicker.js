import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axiosClient from '../../helpers/axiosClient';

const CityPicker = ({setWeatherData}) => {
    const [selectedCityId, setSelectedCityId] = useState('');
    const [cityList, setCityList] = useState(null);

    const handleChange = (event) => {
        setSelectedCityId(event.target.value);
    };

    const getCities = async () => {
        try {
            await axiosClient.get("/cities/capitals")
                .then(function (response) {
                    setCityList(response.data);
                });
        } catch (error) {
            console.log(error);
            setCityList(null);
        }
    };

    const getWeatherInfo = async () => {
        try {
            await axiosClient.get("/weather/city/" + selectedCityId)
                .then(function (response) {
                    setWeatherData(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCities();
    }, []);

    useEffect(() => {
        if (selectedCityId !== '') {
            getWeatherInfo();
        }
    }, [selectedCityId])

    return (
        <Box display="flex" justifyContent="center">
            <FormControl sx={{ pb: 4, m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                {
                    cityList !== null ? (
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCityId}
                            label="City"
                            onChange={handleChange}
                        >
                            {
                                cityList.map((object, idx) => {
                                    return <MenuItem key={idx} value={object.id}>{object.city_name}</MenuItem>
                                })
                            }
                        </Select>
                    ) : null
                }
            </FormControl>
        </Box>
    );
}

export default CityPicker;