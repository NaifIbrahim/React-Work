import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
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

const GenericModal = ({ open, handleClose }) => {
  return (
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
            <li>Original NADRA identity document</li>
            <li>Proof of income (job letter, salary slip, business letter)</li>
            <li>Active email ID</li>
            <li>Active mobile number registered or issued against your ID number</li>
            <li>Camera and location enabled device</li>
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
  );
};

export default GenericModal;