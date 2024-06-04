import * as React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import DeckIcon from '@mui/icons-material/Deck';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Components/Dashboard.css'
import BasicTable from '../Components/Table';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SelectTextFields from './DropdownTextfield';

const Dashboard = () => {
    const [buttonColors, setButtonColors] = useState({
        button1: 'primary',
        button2: 'primary',
        button3: 'primary',
        button4: 'primary',
        button5: 'primary',
        button6: 'primary',
        button7: 'primary',
    });

    const handleButtonClick = (buttonId) => {
        const newButtonColors = {
            button1: buttonId === 'button1' ? 'eight' : 'primary',
            button2: buttonId === 'button2' ? 'third' : 'primary',
            button3: buttonId === 'button3' ? 'fourth' : 'primary',
            button4: buttonId === 'button4' ? 'nineth' : 'primary',
            button5: buttonId === 'button5' ? 'sixth' : 'primary',
            button6: buttonId === 'button6' ? 'seventh' : 'primary',
            button7: buttonId === 'button7' ? 'fifth' : 'primary',
        };

        setButtonColors(newButtonColors);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            // secondary: {
            //     main: '#c90076',
            // },
            third: {
                main: '#6F00FF',
            },
            fourth: {
                main: 'yellow',
            },
            fifth: {
                main: 'red',
            },
            sixth: {
                main: '#81D8D0',
            },
            seventh: {
                main: '#FFF280',
            },
            eight: {
                main: '#00ffd5',
            },
            nineth: {
                main: 'whitesmoke',
            },
        },
    });

    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                    <Box sx={{ flex: 8, bgcolor: '#E5EAF1', padding: '15px' }}>
                        <Typography variant='' fontWeight='bold'>
                            STATE LIFE
                            <br />
                            INSURANCE CORPORATION OF PAKISTAN
                        </Typography>
                        <br />
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <DeckIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    New Business UW
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <HandshakeIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Policy Alterations
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <PriceChangeIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Claims And Surrender
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <NoteAltIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Amendments
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <DirectionsCarFilledIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Re Insurance
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <SettingsIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    CAP
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <ShoppingCartIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant='' sx={{ fontWeight: 'bold' }}>
                                    Courier
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <NotificationsIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Notifications
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <TrendingUpIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Agent Dashboards
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <HistoryIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    User Logs
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                            <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '10px' }}>
                                <AccessTimeFilledIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                <Typography variant=''>
                                    Call Back
                                </Typography>
                                <br />
                                <Typography sx={{ marginTop: '10px', marginLeft: '20px' }}>
                                    Lajward Nageen
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontSize: '0.90rem' }}>
                                    LajwardTest
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '0.90rem' }}>
                                    Retail Business Division
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '0.90rem' }}>
                                    Code:123456789, Year:2024
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontSize: '0.75rem' }}>
                                    Lajward.test+150@gmail.com
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                    Change Password
                                </Typography>
                                <Typography sx={{ marginLeft: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                    Change Branch
                                </Typography>

                                <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex' }}>
                                    <Box sx={{ flex: 8, bgcolor: '#E5EAF1', marginTop: '5px' }}>
                                        <LogoutIcon sx={{ marginRight: '10px', marginLeft: '10px' }} />
                                        <Typography variant=''>
                                            Logout
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 2, bgcolor: '#E5EAF1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box className='arrow-container'>
                            <CloseFullscreenRoundedIcon className='arrow' sx={{ height: '30px', width: '30px', padding: '10px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ flex: 8, bgcolor: 'white', padding: '15px' }}>
                    <Typography variant='h6'>
                        COURIER DASHBOARD
                    </Typography>
                    <br />
                    <Grid container spacing={2}>
                        <SelectTextFields />
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label={<span style={{ fontWeight: 'bold' }}>Enter Order</span>}
                                placeholder="Enter order number"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label={<span style={{ fontWeight: 'bold' }}>Enter Consignment Number</span>}
                                placeholder="Enter consignment number"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label={<span style={{ fontWeight: 'bold' }}>Enter Client Name</span>}
                                placeholder="Enter client name"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label={<span style={{ fontWeight: 'bold' }}>Enter Client E-mail</span>}
                                placeholder="Enter client E-mail"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label={<span style={{ fontWeight: 'bold' }}>Enter Client Phone</span>}
                                placeholder="Enter client phone"
                                multiline
                            />
                        </Grid>
                        <Button variant="contained" sx={{ margin: '20px', borderRadius: '30px', textTransform: 'none' }}>Search for courier</Button>
                    </Grid>
                    <ThemeProvider theme={theme}>
                        <div>
                            <Button
                                variant="contained"
                                color={buttonColors.button1}
                                onClick={() => handleButtonClick('button1')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 1
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button2}
                                onClick={() => handleButtonClick('button2')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 2
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button3}
                                onClick={() => handleButtonClick('button3')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 3
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button4}
                                onClick={() => handleButtonClick('button4')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 4
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button5}
                                onClick={() => handleButtonClick('button5')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 5
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button6}
                                onClick={() => handleButtonClick('button6')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 6
                            </Button>
                            <Button
                                variant="contained"
                                color={buttonColors.button7}
                                onClick={() => handleButtonClick('button7')}
                                sx={{ margin: '10px', marginLeft: '40px' }}
                            >
                                Button 7
                            </Button>
                        </div>
                    </ThemeProvider>
                    <br />
                    <br />
                    <BasicTable />
                </Box>
            </Box>
        </>
    )
}

export default Dashboard;