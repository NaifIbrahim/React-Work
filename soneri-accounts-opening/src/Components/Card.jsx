import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import GenericModal from './Modal';

const GenericCard = ({ title, description, primaryActionText, secondaryActionText }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', borderRadius:'0px' }}>
        <CardContent sx={{ flex: 1, minHeight: '300px' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold', minHeight: '64px' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <a href="https://soneri-assets.s3.me-south-1.amazonaws.com/aof/One+Pager+-+Soneri+Current+Account.pdf" target="_blank" rel="noopener noreferrer">
            <Button sx={{ marginBottom: 1, textTransform: 'none' }} color="primary">
              {primaryActionText}
            </Button>
          </a>
          <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '100%' }} onClick={handleOpen}>
            {secondaryActionText}
          </Button>
        </CardActions>
      </Card>
      <GenericModal open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default GenericCard;