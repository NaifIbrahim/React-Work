import React from 'react'
import FormHeader from './FormHeader'
import { Box, Button, TextField, Typography } from '@mui/material'

function OTP() {
    return (
        <>
            <FormHeader />
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '80%' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='body1'>
                        <span style={{ fontWeight: 'bold', color: '#052CAC', display: 'inline-block', marginBottom: '10px' }}>Verify your mobile number </span>
                        <br />
                        Please enter the OTP we sent to +92 3041025571
                        <br />
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TextField
                                key={index}
                                variant="outlined"
                                sx={{
                                    width: '40px',
                                    marginLeft: index === 0 ? 0 : '10px'
                                }}
                                InputProps={{
                                    sx: {
                                        height: '40px',
                                        backgroundColor: '#EDEDEC',
                                        borderRadius: '10px'
                                    }
                                }}
                                inputProps={{
                                    style: {
                                        padding: 0,
                                        height: '100%',
                                        textAlign: 'center'
                                    }
                                }}
                            />
                        ))}
                    </Box>
                    <br />
                    <Button sx={{ width: '40%', color:'#052CAC', marginTop:'0px' }}>RESEND OTP</Button>
                </Box>
            </Box>
        </>
    )
}

export default OTP