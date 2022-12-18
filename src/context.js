import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(0);
  const [records, setRecords] = useState([]);

  return (
    <AppContext.Provider
      value={{
        currUser,
        setCurrUser,
        loggedIn,
        setLoggedIn,
        isAdmin,
        setIsAdmin,
        records,
        setRecords,
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
