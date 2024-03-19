import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [buttonState, setButtonState] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
