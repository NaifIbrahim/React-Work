import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import SelectTextFields from './DropdownTextfield';
import { useNavigate } from 'react-router-dom';

function BasicCustomerInformation() {
    const [formState, setFormState] = useState({
        fullName: '',
        idType: '',
        idNumber: '',
        email: '',
        mobileOperator: '',
        phoneNumber: '',
        consent1: false,
        consent2: false,
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { fullName, idType, idNumber, email, mobileOperator, phoneNumber, consent1, consent2 } = formState;
        setIsFormValid(fullName && idType && idNumber && email && mobileOperator && phoneNumber && consent1 && consent2);
    }, [formState]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleNext = () => {
        console.log('Button clicked, form valid:', isFormValid);
        if (isFormValid) {
            console.log('Navigating to /Authentication');
            navigate('/Authentication');
        }
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
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
                                    id="fullName"
                                    name="fullName"
                                    value={formState.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name here"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    NADRA identity document type *
                                </Typography>
                                <SelectTextFields
                                    name="idType"
                                    value={formState.idType}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    NADRA identity document number *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="idNumber"
                                    name="idNumber"
                                    value={formState.idNumber}
                                    onChange={handleChange}
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
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Mobile Operator *
                                </Typography>
                                <SelectTextFields
                                    name="mobileOperator"
                                    value={formState.mobileOperator}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Cell number/WhatsApp *
                                </Typography>
                                <TextField
                                    fullWidth
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formState.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '500px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    {...label}
                                    name="consent1"
                                    checked={formState.consent1}
                                    onChange={handleChange}
                                />
                                <Typography variant='body2' sx={{ marginLeft: '8px', fontSize: '12px' }}>
                                    I understand that all correspondence will be carried out on above-mentioned address unless changed in the future by me.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    {...label}
                                    name="consent2"
                                    checked={formState.consent2}
                                    onChange={handleChange}
                                />
                                <Typography sx={{ marginLeft: '8px', fontSize: '12px' }}>
                                    I consent to be contacted on and receive important alerts, statement and updates on my registered number from Soneri WhatsApp service.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#052CAC', borderRadius: '10px' }}>BACK</Button>
                        <Button
                            onClick={handleNext}
                            disabled={!isFormValid}
                            sx={{
                                backgroundColor: isFormValid ? '#052CAC' : '#E0E0E0',
                                borderRadius: '10px',
                                padding: '10px',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: isFormValid ? '#052CAC' : '#E0E0E0',
                                },
                                '&:disabled': {
                                    backgroundColor: '#E0E0E0',
                                    color: '#000',
                                },
                            }}
                        >
                            GO TO AUTHENTICATION
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default BasicCustomerInformation;