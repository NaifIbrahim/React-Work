import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OTP() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpComplete, setIsOtpComplete] = useState(false);
     const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);
        setIsOtpComplete(newOtp.every(digit => digit.length > 0));
    };

    useEffect(() => {
        if (isOtpComplete) {
            setLoading(true);
            setTimeout(() => {
                navigate('/BasicInformation');
            }, 600);
        }
    }, [isOtpComplete, navigate]);

    return (
        <>
            <br />
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
                                    borderRadius: '2px',
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
                    {loading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <CircularProgress />
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default OTP;