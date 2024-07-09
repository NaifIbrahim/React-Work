import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../original_.jpeg';

function FormHeader() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '80px',
                background: 'linear-gradient(to bottom, #FBE198, rgba(251, 225, 152, 0))',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <img src={logo} alt="Logo" height='60px' style={{ marginRight: '20px' }} />
            <Typography variant='h6' sx={{ fontWeight: 'bold', marginLeft: '380px' }}>
                Soneri Digital Account Opening Portal
            </Typography>
        </Box>
    )
}

export default FormHeader