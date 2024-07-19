import React from 'react';
import FormHeader from './FormHeader';
import { Grid, Box, Typography, TextField, Checkbox, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import SelectTextFields from './DropdownTextfield';

function IncomeTax() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <FormHeader />
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={10} md={8} lg={10}>
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px', }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#052CAC' }}>
                            Income
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Occupation *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="place_of_birth"
                                    placeholder="Enter your Place of Birth"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                    Source Of Income *
                                </Typography>
                                <Typography variant='body2' sx={{ marginBottom: '5px' }}>
                                    Select the appropriate/relevant as per available documentary evidence
                                </Typography>
                                <SelectTextFields />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                < Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox {...label} />
                                    <Typography sx={{ marginLeft: '8px', fontSize: '12px' }}>
                                        I do hereby confirm and undertake that I hold the controlling rights being the beneficial owner of the funds in this account, I will be treated as sole beneficial owner of information uploaded/provided digitally for this account in Soneri Bank Limited.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    FATCA Status
                                </Typography>
                                <SelectTextFields />
                                <Typography variant='body1' sx={{ marginTop: '10px' }}>
                                    Are you a Tax Resident other than Pakistan?
                                </Typography>
                                <FormControl component="fieldset">
                                    <RadioGroup row aria-label="fatca" name="fatca-status" defaultValue="no">
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid item xs={12} sm={10} md={8} lg={6}>
                        <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                            <Typography variant='h6' sx={{ marginBottom: '20px', color: '#052CAC' }}>
                                Employer/Business Details
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        Employer/Business Name
                                    </Typography>
                                    <TextField
                                        InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                        fullWidth
                                        id="ref_number"
                                        placeholder="Present residential address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        Employer/Business Address
                                    </Typography>
                                    <TextField
                                        InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                        fullWidth
                                        id="ref_number"
                                        placeholder="contact number"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                        <Button variant='contained' sx={{ backgroundColor: '#052CAC', borderRadius: '10px', padding: '10px', marginBottom: '30px', marginLeft: '20px' }}>BACK</Button>
                        <Button variant='contained' sx={{ backgroundColor: '#052CAC', borderRadius: '10px', padding: '10px', marginBottom: '30px' }}>SAVE & NEXT</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default IncomeTax;