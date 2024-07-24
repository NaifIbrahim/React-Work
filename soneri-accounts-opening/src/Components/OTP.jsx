import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';

function OTP() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpComplete, setIsOtpComplete] = useState(false);
    const navigate = useNavigate();

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        setIsOtpComplete(newOtp.every(digit => digit.length > 0));
    };

    const handleNext = () => {
        if (isOtpComplete) {
            navigate('/BasicInformation'); 
        }
    };

    return (
        <>
            <FormHeader />
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '80%' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='body1'>
                        <span style={{ fontWeight: 'bold', color: '#052CAC', display: 'inline-block', marginBottom: '10px' }}>
                            Verify your mobile number
                        </span>
                        <br />
                        Please enter the OTP we sent to +92 3041025571
                        <br />
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        {otp.map((value, index) => (
                            <TextField
                                key={index}
                                variant="outlined"
                                value={value}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                inputProps={{
                                    maxLength: 1,
                                    style: {
                                        width: '40px',
                                        height: '40px',
                                        textAlign: 'center',
                                        padding: 0
                                    }
                                }}
                                sx={{
                                    marginLeft: index === 0 ? 0 : '10px',
                                    backgroundColor: '#EDEDEC',
                                    borderRadius: '10px',
                                }}
                            />
                        ))}
                    </Box>
                    <br />
                    <Button
                        sx={{ width: '40%', color: '#052CAC', marginTop: '10px' }}
                    >
                        RESEND OTP
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'10px' }}>
                        <Button
                            onClick={handleNext}
                            disabled={!isOtpComplete}
                            sx={{
                                width: '30%',
                                backgroundColor: isOtpComplete ? '#052CAC' : '#E0E0E0',
                                color: '#fff',
                                borderRadius: '10px',
                                padding: '10px',
                                '&:hover': {
                                    backgroundColor: isOtpComplete ? '#052CAC' : '#E0E0E0',
                                },
                                '&:disabled': {
                                    backgroundColor: '#E0E0E0',
                                    color: '#000',
                                },
                            }}
                        >
                            NEXT
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default OTP;