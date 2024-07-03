import React from 'react';
import { Grid, Box, Typography, TextField, Button, useMediaQuery } from '@mui/material';
import { ClassNames } from '@emotion/react';
import cover from '../Assets/Cover.png';
import logo3 from '../Assets/logo3.png';
import learnIcon from '../Assets/learn-icon.png';
import location from '../Assets/location-icon.png';
import support from '../Assets/Support-Icon.png';
import P3logo from '../Assets/P3-logo.png';

function Login() {
    const isMobile = useMediaQuery('(max-width:600px)');

    const classes = {
        root: {
            height: '100%',
        },
        leftPanel: {
            backgroundColor: '#FFFFFF',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        rightPanel: {
            backgroundColor: '#ccc',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        centeredDiv: {
            height: '80%',
            width: '100%',
            padding: '20px',
        },
        innerDiv: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            height: '70px',
            width: '210px',
        },
        loginHeading: {
            marginBottom: '5px',
            fontWeight: 'bold',
            color: 'rgba(0, 0, 0, 0.8)',
        },
        textField: {
            width: '70%',
            marginBottom: '15px',
        },
    };

    return (
        <Grid container className={ClassNames.root}>
            <Grid item xs={12} md={7}>
                <Box className={ClassNames.leftPanel} sx={classes.leftPanel}>
                    <Box sx={classes.centeredDiv}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginLeft: { xs: '0', md: '135px' } }}>
                            <img src={logo3} alt="Logo" style={classes.logo} />
                            <br />
                            <Typography variant='h5' sx={classes.loginHeading}>
                                Log in
                            </Typography>
                            <Typography variant='body1' sx={{ marginBottom: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
                                Welcome back! Please enter your details.
                            </Typography>
                        </Box>
                        <Box sx={classes.innerDiv}>
                            <Typography variant='body2' sx={{ marginRight: { xs: '0', md: '520px' }, color: 'rgba(0, 0, 0, 0.8)' }}>
                                Username
                            </Typography>
                            <TextField
                                variant="outlined"
                                placeholder='Username'
                                sx={{
                                    width: '70%',
                                    marginBottom: '15px',
                                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                    }
                                }}
                            />
                            <Typography variant='body2' sx={{ marginRight: { xs: '0', md: '520px' }, color: 'rgba(0, 0, 0, 0.8)' }}>
                                Password
                            </Typography>
                            <TextField
                                type="password"
                                variant="outlined"
                                placeholder='Password'
                                sx={{
                                    width: '70%',
                                    marginBottom: '15px',
                                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                    }
                                }}
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    marginRight: { xs: '0', md: '130px' },
                                    alignSelf: 'flex-end',
                                    marginBottom: '10px',
                                    color: '#052CAC',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    }
                                }}
                            >
                                Forget username or password?
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: '50px', width: '65%', borderRadius: '30px', marginBottom: '10px', backgroundColor: '#052CAC' }}
                            >
                                Log in
                            </Button>
                            <Typography
                                variant='body2'
                                sx={{
                                    marginRight: { xs: '0', md: '130px' },
                                    alignSelf: 'flex-end',
                                    marginBottom: '10px',
                                    color: 'rgba(0, 0, 0, 0.6)'
                                }}
                            >
                                Don't have an account? {''}
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#052CAC',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    Sign up
                                </Box>
                            </Typography>
                            <br />
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '5px' }}>
                                <img src={learnIcon} alt="Learn Icon" height='40px' />
                                <img src={location} alt="Location Icon" height='40px' />
                                <img src={support} alt="Support Icon" height='40px' />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '60px', color: '#3F63DD' }}>
                                <Typography variant='body2'>
                                    Learn
                                </Typography>
                                <Typography variant='body2'>
                                    Location
                                </Typography>
                                <Typography variant='body2'>
                                    Support
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
                            <Typography variant='body2' sx={{ marginTop: '30px', fontWeight: 'bold' }}>
                                Version 1.3.0
                            </Typography>
                            <img src={P3logo} alt="P3 Logo" height='50px' />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            {!isMobile && (
                <Grid item xs={12} md={5}>
                    <Box className={ClassNames.rightPanel} sx={classes.rightPanel}>
                        <img src={cover} alt="Cover" style={{ height: '100vh', width: '100vw' }} />
                    </Box>
                </Grid>
            )}
        </Grid>
    );
}

export default Login;
