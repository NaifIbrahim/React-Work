import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import FormHeader from './FormHeader';

const steps = [
  "Let's start",
  'Authentication',
  'Your Details',
  'Income & Tax',
  'Account Info',
  'Documents',
  'Consent & declaration',
  'Review',
];

const CustomStepper = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <FormHeader/>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;