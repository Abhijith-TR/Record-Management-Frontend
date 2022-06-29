import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(0);
  const [changePassword, setChangePassword] = useState(false);
  const [displayView, setDisplayView] = useState(true);
  const [displayAdmin, setDisplayAdmin] = useState(false);
  const [displayUpdate, setDisplayUpdate] = useState(false);

  return (
    <AppContext.Provider
      value={{
        changePassword,
        setChangePassword,
        displayAdmin,
        displayUpdate,
        displayView,
        setDisplayView,
        setDisplayAdmin,
        setDisplayUpdate,
        loggedIn,
        setLoggedIn,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
