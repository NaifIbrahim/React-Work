import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BasicCustomerInformation from './Components/BasicCustomerInformation';
import Homepage from './Components/Homepage';
import OTP from './Components/OTP';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/basic-customer-info" element={<BasicCustomerInformation />} />
          <Route path="/Authentication" element={<OTP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;