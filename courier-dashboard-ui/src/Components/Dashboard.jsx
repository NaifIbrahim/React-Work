import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import logo from '../Assets/logo.png';
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
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CachedIcon from '@mui/icons-material/Cached';
import React, { useState } from 'react';
import BasicTable from '../Components/Table';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Dashboard() {
  const [buttonColors, setButtonColors] = useState({
    button1: 'primary',
    button2: 'primary',
    button3: 'primary',
    button4: 'primary',
    button5: 'primary',
    button6: 'primary',
    button7: 'primary',
  });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const [formValues, setFormValues] = useState({
    ref_number: '',
    orderNumber: '',
    consignment_number: '',
    clientName: '',
    clientEmail: '',
    clientPhone: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value
    });
  };

  const handleSubmit = () => {
    console.log(formValues);
    console.log(formValues.ref_number);
    console.log(formValues.orderNumber);
    console.log(formValues.consignment_number);
    console.log(formValues.clientName);
    console.log(formValues.clientEmail);
    console.log(formValues.clientPhone);
  };

  const handleButtonClick = (buttonId) => {
    const newButtonColors = {
      button1: buttonId === 'button1' ? 'nineth' : 'primary',
      button2: buttonId === 'button2' ? 'nineth' : 'primary',
      button3: buttonId === 'button3' ? 'nineth' : 'primary',
      button4: buttonId === 'button4' ? 'nineth' : 'primary',
      button5: buttonId === 'button5' ? 'nineth' : 'primary',
      button6: buttonId === 'button6' ? 'nineth' : 'primary',
      button7: buttonId === 'button7' ? 'nineth' : 'primary',
    };

    setButtonColors(newButtonColors);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };



  const theme = createTheme({
    palette: {
      primary: {
        main: '#0194DB',
      },
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{
                width: isSidebarCollapsed ? '5%' : '20%',
                height: '100%',
                backgroundColor: '#E5EAF1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingTop: '0px',
                transition: 'width 0.3s ease',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '5px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '85%' }}>
                    <img src={logo} alt="Descriptive Alt Text" style={{ height: '70px', width: 'auto', maxWidth: '85%' }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '25%', marginTop: '20px', marginRight: '10px' }}>
                    <CloseFullscreenIcon onClick={toggleSidebar} sx={{ cursor: 'pointer', width: '20px' }} />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                  <DeckIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>New Bussiness UW</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <HandshakeIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Policy Alteration</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <PriceChangeIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Claims & Surrender</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <NoteAltIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Amendments</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <DirectionsCarFilledIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Re Insurance</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <SettingsIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>CAP</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <ShoppingCartIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Courier</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <NotificationsIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Notifications</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <TrendingUpIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Agent Dashboard</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <HistoryIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>User Logs</Typography>}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <AccessTimeFilledIcon sx={{ marginLeft: '15px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '20px' }}>Callback</Typography>}
                </Box>
                {!isSidebarCollapsed && (
                  <>
                    <Typography sx={{ padding: '35px', fontSize: '17px', paddingBottom: '0px' }}>
                      Lajward Nageen
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px' }}>
                      lajwardtest
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px', fontWeight: 'bold' }}>
                      Retail Bussiness Divison
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px', fontWeight: 'bold' }}>
                      Code :  01010101 , Year : 2024
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px' }}>
                      lajwardtest150@gmail.com
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px' }}>
                      Change Password
                    </Typography>
                    <Typography sx={{ paddingLeft: '35px', fontSize: '14px' }}>
                      Change Branch
                    </Typography>
                  </>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', width: '100%' }}>
                  <LogoutIcon sx={{ marginLeft: isSidebarCollapsed ? '5%' : '35px' }} />
                  {!isSidebarCollapsed && <Typography variant="body1" sx={{ marginLeft: '10px' }}>Logout</Typography>}
                </Box>
              </Box>
              <Box sx={{ width: '80%', backgroundColor: '#FFFFFF', transition: 'width 0.3s ease' }}>
                <Box sx={{ flex: 8, bgcolor: 'white', padding: '15px', paddingBottom: '0px' }}>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    COURIER DASHBOARD
                  </Typography>
                  <br />
                  <Grid container spacing={0}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="ref_number"
                            label={<span style={{ fontWeight: 'bold' }}>Ref Number</span>}
                            placeholder="Enter Ref number"
                            multiline
                            value={formValues.ref_number}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="orderNumber"
                            label={<span style={{ fontWeight: 'bold' }}>Order Number</span>}
                            placeholder="Enter order number"
                            multiline
                            value={formValues.orderNumber}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="consignment_number"
                            label={<span style={{ fontWeight: 'bold' }}>Consignment Number</span>}
                            placeholder="Enter consignment number"
                            multiline
                            value={formValues.consignment_number}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="clientName"
                            label={<span style={{ fontWeight: 'bold' }}>Client Name</span>}
                            placeholder="Enter client name"
                            multiline
                            value={formValues.clientName}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="clientEmail"
                            label={<span style={{ fontWeight: 'bold' }}>Client E-mail</span>}
                            placeholder="Enter client E-mail"
                            multiline
                            value={formValues.clientEmail}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            id="clientPhone"
                            label={<span style={{ fontWeight: 'bold' }}>Client Phone</span>}
                            placeholder="Enter client phone"
                            multiline
                            value={formValues.clientPhone}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Button variant="contained" sx={{ margin: '20px', borderRadius: '40px', textTransform: 'none', backgroundColor: '#0194DB' }} onClick={handleSubmit}>Search for Courier</Button>
                  </Grid>
                  <ThemeProvider theme={theme}>
                    <div>
                      <Button
                        variant="contained"
                        color={buttonColors.button1}
                        onClick={() => handleButtonClick('button1')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        New
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button2}
                        onClick={() => handleButtonClick('button2')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        Booked
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button3}
                        onClick={() => handleButtonClick('button3')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        Received
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button4}
                        onClick={() => handleButtonClick('button4')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        In Transit
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button5}
                        onClick={() => handleButtonClick('button5')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        Out For Delivery
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button6}
                        onClick={() => handleButtonClick('button6')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        Delivered
                      </Button>
                      <Button
                        variant="contained"
                        color={buttonColors.button7}
                        onClick={() => handleButtonClick('button7')}
                        sx={{ margin: '10px', marginLeft: '40px', textTransform: 'none' }}
                      >
                        Returned
                      </Button>
                      <CachedIcon sx={{ marginLeft: '15px', fontSize: '30px' }} />
                    </div>
                  </ThemeProvider>
                  <br />
                  <br />
                  <BasicTable />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;