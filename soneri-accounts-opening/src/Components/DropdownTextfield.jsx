import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'CNIC',
    label: 'CNIC',
  },
  {
    value: 'SCNIC',
    label: 'SCNIC',
  },
  {
    value: 'NICOP',
    label: 'NICOP',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: '#F5F7F9',
        '& .MuiTextField-root': { width: '391px' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          select
          label="Select from the list"
          placeholder="Select from the list"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <span style={{ fontWeight: 'bold' }}>{option.label}</span>
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
