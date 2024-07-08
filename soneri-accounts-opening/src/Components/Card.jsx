import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  borderRadius: '5px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const GenericCard = ({ title, description, primaryActionText, secondaryActionText }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <a href="https://soneri-assets.s3.me-south-1.amazonaws.com/aof/One+Pager+-+Soneri+Current+Account.pdf" target="_blank" rel="noopener noreferrer">
            <Button sx={{
              marginBottom: 1, textTransform: 'none',
            }}
              color="primary">
              {primaryActionText}
            </Button>
          </a>
          <Button variant="contained" sx={{ backgroundColor: '#052CAC', width: '100%' }} onClick={handleOpen}>
            {secondaryActionText}
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" sx={{ color: '#052CAC', fontWeight: 'bold' }}>
            Thank you for showing interest in Soneri Bank digital account opening!
          </Typography>
          <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
            By proceeding, I hereby confirm that I am not visually impaired/blind person, neither carry shaky signatures or a politically exposed person (PEP)/associated/related to/in close family relationship with PEP and qualified to open account digitally as per applicable laws.
            <br />
            Before we move forward, make sure that you have the following documents in your hand:
            <ul>
              <li>
                Original NADRA identity document
              </li>
              <li>
                Proof of income (job letter, salary slip, business letter)
              </li>
              <li>
                Active email ID
              </li>
              <li>
                Active mobile number registered or issued against your ID number
              </li>
              <li>
                Camera and location enabled device
              </li>
            </ul>
            Note: In case your NADRA ID is expired, please upload the original NADRA token.
            <br />
            If you need any assistance feel free to visit your nearest Soneri Bank branch or call 021-111-SONERI (766374)
            <br />
            <br />
            <span style={{ color: '#052CAC', fontWeight: 'bold' }}>
              Important! If you decide to proceed on web, you will need to finalize the application via our mobile app to verify your biometric details!
            </span>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Link to="/basic-customer-info">
              <Button
                sx={{
                  marginBottom: 1,
                  textTransform: 'none',
                  color: '#052CAC',
                  padding: '6px 35px',
                  maxWidth: 'fit-content'
                }}
                color="primary"
              >
                LET'S START
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

export default GenericCard;