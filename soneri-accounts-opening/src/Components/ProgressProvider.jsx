// ProgressContext.js
import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const location = useLocation();
  const activeStep = useMemo(() => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/basic-customer-info':
        return 1;
      case '/Authentication':
        return 2;
      case '/BasicInformation':
        return 3;
      case '/IncomeTax':
        return 4;
      case '/AccountInfo':
        return 5;
      default:
        return 0;
    }
  }, [location.pathname]);

  return (
    <ProgressContext.Provider value={activeStep}>
      {children}
    </ProgressContext.Provider>
  );
};

const useProgress = () => useContext(ProgressContext);

export { ProgressProvider, useProgress };