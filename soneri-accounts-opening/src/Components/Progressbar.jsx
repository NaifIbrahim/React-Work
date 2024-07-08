import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
// import Form1 from './Form1';
// import Form2 from './Form2';
// Import other form components similarly
// import Form8 from './Form8';

export default function MainFormContainer() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [forms, setForms] = useState([
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' },
    { field1: '', field2: '', field3: '' }
  ]);

  const calculateProgress = (forms) => {
    const totalForms = forms.length;
    const completedForms = forms.filter(form =>
      Object.values(form).every(value => value !== '')
    ).length;
    return (completedForms / totalForms) * 100;
  };

  const handleInputChange = (formIndex, e) => {
    const { name, value } = e.target;
    setForms(prevForms => {
      const newForms = prevForms.map((form, index) =>
        index === formIndex ? { ...form, [name]: value } : form
      );
      setProgress(calculateProgress(newForms));
      return newForms;
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      <Box sx={{ mt: 2 }}>
        {/* <Form1 formData={forms[0]} handleInputChange={(e) => handleInputChange(0, e)} />
        <Form2 formData={forms[1]} handleInputChange={(e) => handleInputChange(1, e)} />
        {/* Include other forms similarly */}
        {/* <Form8 formData={forms[7]} handleInputChange={(e) => handleInputChange(7, e)} /> */}
      </Box>
    </Box>
  );
}
