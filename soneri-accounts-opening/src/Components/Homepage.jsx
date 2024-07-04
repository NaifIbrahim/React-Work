import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import logo from '../original_.jpeg';

function Homepage() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '80px',
                    background: 'linear-gradient(to bottom, #FBE198, rgba(251, 225, 152, 0))',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt="" height='60px' />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Soneri Digital Account Opening Portal
                </Typography>
                <Typography variant='body1' paddingRight='10px'>
                    Already have an open application?{'  '}
                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', fontWeight: 'bold' }}>Login</Button>
                </Typography>
            </Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', color: '#052CAC' }}>
                    Open a new account from the comfort of your home!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Apply and open an account online with Soneri Digital. You can browse through products in both Conventional and Mustaqeem segments below.
                </Typography>
                <br />
                <Grid container spacing={2} >
                    <Grid item xs={3} sm={3} md={3}>
                        <Button variant="contained" fullWidth sx={{ backgroundColor: '#052CAC', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>CONVENTIONAL</Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <Button variant="outlined" sx={{ borderBottom: 'none', color: '#052CAC', borderColor: '#052CAC', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>MUSTAQEEM</Button>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#EAECFD',
                        padding: '20px 20px',
                        borderRadius: '10px'
                    }}
                >
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '60px', fontWeight: 'bold', }}>
                                        Soneri Current Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '100px' }}>
                                        A Pak rupee account lets the customers enjoy a host of free banking services with no restriction on number of transactions. It also provides complete peace of mind with free Worldwide Accidental Insurance and ATM Withdrawal Coverage.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                                        Soneri Ladies First Current Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '10px' }}>
                                        Soneri Ladies First Account-An Exclusive Banking Platform is a current account for females who are eligible to open bank account. At Soneri Bank, we strive to offer vibrant range of products and services to exceed our customer’s expectations. As women comprise half of the adult population in Pakistan, it is imperative for Soneri Bank Limited, being an inclusive financial services provider to offer financial services and an exclusive bank account truly accessible for all ladies
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '60px', fontWeight: 'bold' }}>
                                        Soneri PLS Savings Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '100px' }}>
                                        A Pak rupee savings account for Individuals to meet their basic banking needs and enjoy competitive returns on their savings every six months with the flexibility of withdrawing your amount or profits anytime.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '60px', fontWeight: 'bold' }}>
                                        Asaan Digital Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '100px' }}>
                                        A Pak rupee account with options to choose between current or savings. Lets the customers enjoy a host of free banking services with no restrictions on the number of transactions and no minimum balance limit.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                                        Asaan Digital Remittance Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '70px' }}>
                                        A Pak rupee account with options to choose between current or savings. Customers can now instantly receive money from their loved ones living anywhere around the globe, directly into their account. Lets the customers enjoy a host of free banking services with no restrictions on the number of transactions.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ marginBottom: '45px', fontWeight: 'bold' }}>
                                        Freelancer Account
                                    </Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '40px' }}>
                                        A Pak rupee account with options to choose between current or savings. Lets the customers enjoy a host of free banking services with no restrictions on the number of transactions and no minimum balance limit along with Exporter's special foreign currency account as a secondary account for retention purpose only available in USD, GBP, and EUR. Receive overseas freelancing payments easily into your account.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ justifyContent: 'flex-start', padding: '10px', flexDirection: 'column' }}>
                                    <Button style={{ marginRight: '5px', textTransform: 'none' }} color='primary'>Learn More</Button>
                                    <br />
                                    <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '300px' }}>APPLY NOW</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Homepage;
