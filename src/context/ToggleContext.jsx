import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a Context
const ToggleContext = createContext();

// Create a Provider Component
export const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(true)
  // const navigate = useNavigate()

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  const toggle2 = () => {
    setIsToggled2((prev) => !prev);
  };



  return (
    <ToggleContext.Provider value={{ isToggled, toggle ,isToggled2, toggle2}}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to use the ToggleContext
export const useToggle = () => {
  return useContext(ToggleContext);
};
