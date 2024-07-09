import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import GenericCard from './Card';
import cardData from './CardData';
import Header from './Header';

function Homepage() {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ py: 2 }}>
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
                        {cardData.map((card, index) => (
                            <GenericCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                primaryActionText={card.primaryActionText}
                                secondaryActionText={card.secondaryActionText}
                                onPrimaryActionClick={card.onPrimaryActionClick}
                                onSecondaryActionClick={card.onSecondaryActionClick}
                            />
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Homepage;