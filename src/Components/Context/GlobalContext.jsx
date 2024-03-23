import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [buttonState, setButtonState] = React.useState(false);
  const [patchImage, setPathImage] = React.useState(null);

  return (
    <GlobalContext.Provider value={{ patchImage, setPathImage }}>
      {children}
    </GlobalContext.Provider>
  );
};
