import React from 'react';
import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import logo from '../original_.jpeg';
import SelectTextFields from './DropdownTextfield';

function BasicCustomerInformation() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '80px',
                    background: 'linear-gradient(to bottom, #FBE198, rgba(251, 225, 152, 0))',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt="Logo" height='60px' style={{ marginRight: '20px' }} />
                <Typography variant='h6' sx={{ fontWeight: 'bold', marginLeft: '380px' }}>
                    Soneri Digital Account Opening Portal
                </Typography>
            </Box>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={10} md={8} lg={10}>
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#052CAC' }}>
                            1. Basic customer information
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Full name (as per NADRA record) *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter your full name here"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    NADRA identity document type *
                                </Typography>
                                <SelectTextFields />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    NADRA identity document number *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="consignment_number"
                                    placeholder="Enter ID number without dashes"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Email address *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Mobile Operator *
                                </Typography>
                                <SelectTextFields />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Cell number/WhatsApp *
                                </Typography>
                                <TextField
                                    fullWidth
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    id="clientPhone"
                                    placeholder="Enter phone number"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '500px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography variant='body2' sx={{ marginLeft: '8px', fontSize: '12px' }}>
                                    I understand that all correspondence will be carried out on above-mentioned address unless changed in the future by me.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography sx={{ marginLeft: '8px', fontSize: '12px' }}>
                                    I consent to be contacted on and receive important alerts, statement and updates on my registered number from Soneri WhatsApp service.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#052CAC', borderRadius: '10px' }}>BACK</Button>
                        <Button disabled sx={{ backgroundColor: '#E0E0E0', borderRadius: '10px', padding: '10px' }}>GO TO AUTHENTICATION</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default BasicCustomerInformation;