import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    step: 1,
    name: '',
    email: '',
    address: '',
    phone: '',
    message:'',
    option:'',
    recommendations:'',
    options:''
  });

  const nextStep = () => {
    setFormData(prevState => ({ ...prevState, step: prevState.step + 1 }));
  };

  const prevStep = () => {
    setFormData(prevState => ({ ...prevState, step: prevState.step - 1 }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, nextStep, prevStep }}>
      {children}
    </FormContext.Provider>
  );
};