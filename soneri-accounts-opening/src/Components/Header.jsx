import React from 'react'
import logo from '../original_.jpeg';
import { Box, Button, Typography } from '@mui/material';

function Header() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '80px',
                    background: 'linear-gradient(to bottom, #FBE198, rgba(251, 225, 152, 0))',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt="" height='60px' />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Soneri Digital Account Opening Portal
                </Typography>
                <Typography variant='body1' paddingRight='20px'>
                    Already have an open application?{' '}
                    <Button variant="contained" sx={{ backgroundColor: '#052CAC' }}>Login</Button>
                </Typography>
            </Box>
        </>
    )
}

export default Header