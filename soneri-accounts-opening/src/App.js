import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BasicCustomerInformation from './Components/BasicCustomerInformation';
import Homepage from './Components/Homepage';
import OTP from './Components/OTP';
import BasicInformation from './Components/BasicInformation';
import TestingApi from './Components/API';
import IncomeTax from './Components/IncomeTax';
import AccountInfo from './Components/AccountInfo';
import { ProgressProvider } from './Components/ProgressContext';
import CustomStepper from './Components/Progressbar';

function App() {
  return (
    <Router>
      <ProgressProvider>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/basic-customer-info" element={<><CustomStepper activeStep={0} /><BasicCustomerInformation /></>} />
            <Route path="/Authentication" element={<><CustomStepper activeStep={1} /><OTP /></>} />
            <Route path="/BasicInformation" element={<><CustomStepper activeStep={2} /><BasicInformation /></>} />
            <Route path="/Testing" element={<TestingApi />} />
            <Route path="/IncomeTax" element={<><CustomStepper activeStep={3} /><IncomeTax /></>} />
            <Route path="/AccountInfo" element={<><CustomStepper activeStep={4} /><AccountInfo /></>} />
          </Routes>
        </div>
      </ProgressProvider>
    </Router>
  );
}

export default App;