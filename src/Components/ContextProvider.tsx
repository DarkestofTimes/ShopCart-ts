import { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface DataItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface DataProps {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const defaultContextValue: DataProps = {
  data: [],
  setData: () => {},
};

const DataContext = createContext<DataProps>(defaultContextValue);

const DataContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [data, setData] = useState<DataItem[]>([]);

  const contextItems = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextItems}>{children}</DataContext.Provider>
  );
};

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  return <DataContextProvider>{children}</DataContextProvider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => useContext(DataContext);
