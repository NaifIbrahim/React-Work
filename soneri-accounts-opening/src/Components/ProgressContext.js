import React, { createContext, useState } from 'react';

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <ProgressContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressProvider, ProgressContext };