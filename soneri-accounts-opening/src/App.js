import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BasicCustomerInformation from './Components/BasicCustomerInformation';
import Homepage from './Components/Homepage';
import OTP from './Components/OTP';
import BasicInformation from './Components/BasicInformation';
import TestingApi from './Components/API';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/basic-customer-info" element={<BasicCustomerInformation />} />
          <Route path="/Authentication" element={<OTP />} />
          <Route path="/BasicInformation" element={<BasicInformation />} />
          <Route path="/Testing" element={<TestingApi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;