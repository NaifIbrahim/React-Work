import React from 'react'
import FormHeader from './FormHeader'
import { Alert, Box, Button, Checkbox, Grid, Radio, TextField, Typography } from '@mui/material';
import BasicDatePicker from './Datepicker'
import { useNavigate } from 'react-router-dom';

function BasicInformation() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [selectedValue, setSelectedValue] = React.useState('a');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
    const handleNext = () => {
        navigate('/IncomeTax');
    };

    return (
        <>
            <FormHeader />
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#052CAC' }}>
                            1. Basic information
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Place of Birth *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter your Place of Birth"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Gender *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter your Gender"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Mother's maiden name *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="consignment_number"
                                    placeholder="Enter Mother's maiden name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Father/Husband Name *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter Father/Husband Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    ID Document expiry date *
                                </Typography>
                                <BasicDatePicker />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    ID Document issuance date *
                                </Typography>
                                <BasicDatePicker />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Date of Birth *
                                </Typography>
                                <BasicDatePicker />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Current country of residence *
                                </Typography>
                                <TextField
                                    fullWidth
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    id="clientPhone"
                                    placeholder="Current country of residence"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Alert variant="filled" severity="info">
                        Incase of expired legal id document. NADRA renewal token slip is required. Please attach the slip in document section.
                    </Alert>
                    <br />
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px', marginLeft: '20px' }}>
                            Nationality *
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: '#F5F7F9', marginLeft: '20px', width: '310px' }}
                            id="clientPhone"
                            placeholder="Enter your country"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <br />
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#052CAC' }}>
                            2. Present Residential Address
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Address *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter your address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Nearest landmark *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter nearest landmark"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Country *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="consignment_number"
                                    placeholder="Enter your country"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Province *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter your province"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    City *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter your city"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#052CAC' }}>
                            3. Permenant Residential Address
                        </Typography>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        Use present residential address
                        <Radio
                            sx={{ marginLeft: '60px' }}
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        Enter a new address
                        <br />
                        <br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Address *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter your address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Nearest landmark *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="Enter nearest landmark"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Country *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="consignment_number"
                                    placeholder="Enter your country"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Province *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter your province"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    City *
                                </Typography>
                                <TextField
                                    sx={{ backgroundColor: '#F5F7F9', marginBottom: '20px' }}
                                    fullWidth
                                    id="clientName"
                                    placeholder="Enter your city"
                                />
                            </Grid>
                            <Typography variant='body1' sx={{ marginLeft: '30px', fontWeight: 'bold' }}>
                                Please select / check mark, if above provided present OR permanent address differs from the addresses mention on your identity document
                            </Typography>
                            <br />
                            < Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography variant='body1' sx={{ marginLeft: '8px' }}>
                                    I do hereby undertake that my above mentioned present/permanent residential address(s) differs from
                                    the address(s) mentioned on ny identity document (CNIC/SCNIC). My above provided present/permanent address(s) supported by the attached document shall remain valid for bank record till the time, linfonn the bank regarding any change or otherwise. I hereby undertake and hold myself responsible fer any consequences, including but not limited to claims & losses which the bank may face or arise as a result of information provided herein.
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>
                    <Grid item xs={12} sm={10} md={8} lg={8}>
                        <br />
                        <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#052CAC' }}>
                                4. Correspondence Address
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        Select Correspondence Address *
                                    </Typography>
                                    <TextField
                                        InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                        fullWidth
                                        id="ref_number"
                                        placeholder="Present residential address"
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Landline contact number (optional) *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="ref_number"
                                    placeholder="contact number"
                                />
                            </Grid>
                        </Box>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px' }}>
                        <Button variant='contained' onClick={handleNext} sx={{ backgroundColor: '#052CAC', borderRadius: '10px', padding: '10px', marginBottom: '30px' }}>SAVE & NEXT</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default BasicInformation