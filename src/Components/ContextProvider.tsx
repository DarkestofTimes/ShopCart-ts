import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextItems = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextItems}>{children}</DataContext.Provider>
  );
};

export const ContextProvider = ({ children }) => {
  return <DataContextProvider>{children}</DataContextProvider>;
};

export const useDataContext = () => useContext(DataContext);
