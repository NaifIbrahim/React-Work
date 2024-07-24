import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectTextFields({ name, value, onChange }) {
    return (
        <FormControl fullWidth>
            <InputLabel id={`${name}-label`}>Select from the list</InputLabel>
            <Select
                labelId={`${name}-label`}
                id={name}
                name={name}
                value={value || ''}
                onChange={onChange}
                label="Select from the list"
            >
                <MenuItem sx={{fontWeight:'bold'}} value="CNIC">CNIC</MenuItem>
                <MenuItem sx={{fontWeight:'bold'}} value="SCNIC">SCNIC</MenuItem>
                <MenuItem sx={{fontWeight:'bold'}} value="NICOP">NICOP</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectTextFields;