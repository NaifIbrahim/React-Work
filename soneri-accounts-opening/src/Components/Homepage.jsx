import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Header from './Header';
import GenericCard from './Card';

function Homepage() {
    const [cardData, setCardData] = useState([]);
    const [selectedAccountType, setSelectedAccountType] = useState('CONVENTIONAL');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://rda-api-qa.cloudasset.com/api/v1/digital/onboard/products/new');
            console.log(response.data);

            if (Array.isArray(response.data)) {
                const filteredData = response.data.find(account => account.accountType === selectedAccountType);

                if (filteredData && filteredData.products) {
                    const transformedData = filteredData.products.map((product) => ({
                        title: product.title,
                        description: product.shortDescription,
                        primaryActionText: 'Learn More',
                        secondaryActionText: 'APPLY NOW',
                    }));
                    setCardData(transformedData);
                } else {
                    console.error('No products found for the selected account type');
                }
            } else {
                console.error('API response is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    });

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
                <Grid container spacing={2}>
                    <Grid item xs={3} sm={3} md={3}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: selectedAccountType === 'CONVENTIONAL' ? '#052CAC' : 'gray', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                            onClick={() => setSelectedAccountType('CONVENTIONAL')}
                        >
                            CONVENTIONAL
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: selectedAccountType === 'MUSTAQEEM' ? '#052CAC' : 'gray', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                            fullWidth
                            onClick={() => setSelectedAccountType('MUSTAQEEM')}
                        >
                            MUSTAQEEM
                        </Button>
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