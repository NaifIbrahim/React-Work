// CustomStepper.js
import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import { useProgress } from './ProgressContext';

const steps = [
  "Let's start",
  'Basic Customer Information',
  'Authentication',
  'Basic Information',
  'Income & Tax',
  'Account Info',
  'Documents',
  'Consent & Declaration',
  'Review',
];

const CustomStepper = () => {
  const activeStep = useProgress();
  return (
    <Box sx={{ width: '100%' }}>
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