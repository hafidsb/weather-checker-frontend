import React, { useState } from "react";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CityPicker = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box display="flex" justifyContent="center">
            <FormControl sx={{ pb: 4, m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="City"
                    onChange={handleChange}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default CityPicker;