import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const DraggableButton = styled(Button)({
  cursor: 'grab',
  userSelect: 'none',
  '&:active': {
    cursor: 'grabbing',
  },
});

function DragToLogin() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Perform login action here
    console.log('Login performed!');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    // Perform login action here
    console.log('Login performed!');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            border: '2px dashed #aaa',
            padding: '20px',
            borderRadius: '10px',
            minHeight: '200px',
          }}
        >
          {isDragging ? (
            <Typography variant="h6">Release to Login</Typography>
          ) : (
            <DraggableButton
              variant="contained"
              color="primary"
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              Drag to Login
            </DraggableButton>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default DragToLogin;
