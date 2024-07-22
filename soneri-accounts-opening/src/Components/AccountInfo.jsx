import React from 'react';
import { Grid, Box, Typography, TextField, FormControl, FormControlLabel, RadioGroup, Radio, Button, Checkbox } from '@mui/material';
import SelectTextFields from './DropdownTextfield';
import FormHeader from './FormHeader';

function AccountInfo() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            <FormHeader />
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={10} md={8} lg={10}>
                    <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#052CAC' }}>
                            1. Account Information *
                        </Typography>
                        <br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Account Currency *
                                </Typography>
                                <TextField
                                    InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                    fullWidth
                                    id="account_currency"
                                    placeholder="PKR"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    Purpose Of Account *
                                </Typography>
                                <SelectTextFields />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                    Nature of transactions *
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            {["Cash Deposit/Withdrawal", "Foreign Remittances", "Inward/Outward Clearing", "Fund Transfers Own/Other Bank", "Banker Cheque/Draft"].map((text, index) => (
                                <Grid item key={index}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Checkbox {...label} />
                                        <Typography variant='body2' sx={{ marginLeft: '8px' }}>
                                            {text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <br />
                        <Grid container spacing={4}>
                            {["Estimated annual income", "Expected monthly credit transactions", "Expected monthly debit transactions"].map((text, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {text} *
                                    </Typography>
                                    <SelectTextFields />
                                </Grid>
                            ))}
                        </Grid>
                        <br />
                        <Grid container spacing={4}>
                            {["Estimated monthly credit transactions", "Estimated monthly debit transactions"].map((text, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {text} *
                                    </Typography>
                                    <SelectTextFields />
                                </Grid>
                            ))}
                        </Grid>
                        <br />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#052CAC' }}>
                            2. Account Services
                        </Typography>
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                Would you like a cheque book? *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            <TextField
                                InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                fullWidth
                                id="cheque_book_leaves"
                                placeholder="Number of leaves"
                            />
                            <br />
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="I do hereby authorise Soneri Bank Limited to share my account information, including account number and title, with the Bank’s approved printer for Cheque Book printing."
                            />
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="I understand that if my Cheque Book is not collected within 45 days of the issuance date, the Bank reserves the right to destroy the Cheque Book. Cheque Book charges, already recovered, will not be refunded."
                            />
                        </FormControl>
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                Would you like a Soneri debit card? *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            <br />
                            <Grid container spacing={2}>
                                {["Soneri Pay Pak Debit Card", "Soneri Master Gold Debit Card", "Soneri Master Classic Debit Card", "Soneri Mastercard Platinum Debit Card"].map((card, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <FormControlLabel
                                            control={<Radio />}
                                            label={
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img src={`/path/card${index + 1}.png`} alt={card} style={{ width: '100%', marginBottom: '8px' }} />
                                                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                                        {card}
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </FormControl>
                        <br />
                        <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                            Select Debit Card Reason
                        </Typography>
                        <TextField
                            InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                            fullWidth
                            id="debit_card_reason"
                            placeholder="e-Commerce transactions"
                        />
                        <br />
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                Electronic Fund Transfer (EFT) consent: *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="By my consent above, I agree that Soneri Bank Limited may activate all the banking services available including electronic fund transfers by using any payment instruments, channels or modes to execute all Debit/Credit transactions for my accounts in electronic form."
                            />
                        </FormControl>
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                SMS alerts activation *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="Bank will send FREE SMS alerts for All Digital/Alternative Delivery Channels and Outward Clearing transactions. However, SMS Alerts for other banking services and in branch transactions will be charged as per prevailing schedule of charges of the bank. SMS will be sent to +92 3041025571"
                            />
                        </FormControl>
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                Raast registration *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <FormControl component="fieldset">
                            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                E-statement subscription: *
                            </Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            <RadioGroup row>
                                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                                <FormControlLabel value="half_yearly" control={<Radio />} label="Half Yearly" />
                                <FormControlLabel value="yearly" control={<Radio />} label="Yearly" />
                            </RadioGroup>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="I do hereby authorize the Bank to send regulatory statement of account of my account through email (E-SOA) in lieu of physical dispatch of statement at my address. I undertake that it is my sole responsibility to keep the mentioned email address active, valid and protected in all respects."
                            />
                        </FormControl>
                        <br />
                        <Typography variant='body1'>
                            Your account statement will be delivered to your email address naifibrahim125@gmail.com
                        </Typography>
                        <br />
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#052CAC' }}>
                            3. Other information
                        </Typography>
                        <br />
                        <Grid container spacing={4}>
                            {["Desired City for branch", "Desired branch", "Branch staff referral (optional)"].map((label, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {label} *
                                    </Typography>
                                    <TextField
                                        InputProps={{ sx: { borderRadius: '7px', backgroundColor: '#F5F7F9' } }}
                                        fullWidth
                                        id={label.replace(/\s+/g, '_').toLowerCase()}
                                        placeholder={`Enter ${label.toLowerCase()}`}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <br />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                            <Button variant='contained' sx={{ backgroundColor: '#052CAC', borderRadius: '10px', padding: '10px', marginBottom: '30px' }}>BACK</Button>
                            <Button variant='contained' sx={{ backgroundColor: '#052CAC', borderRadius: '10px', padding: '10px', marginBottom: '30px' }}>SAVE & NEXT</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default AccountInfo;