import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <GlobalContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
