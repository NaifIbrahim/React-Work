import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const GenericCard = ({ title, description, primaryActionText, secondaryActionText, onPrimaryActionClick, onSecondaryActionClick }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <CardContent sx={{ flex: 1, minHeight: '300px' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold', minHeight: '64px' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <Button sx={{ marginBottom: 1, textTransform: 'none' }} color="primary" onClick={onPrimaryActionClick}>
            {primaryActionText}
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '100%' }} onClick={onSecondaryActionClick}>
            {secondaryActionText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GenericCard;