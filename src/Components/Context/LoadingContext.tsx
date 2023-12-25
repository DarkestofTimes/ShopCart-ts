import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface LoadingProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: LoadingProps = {
  loading: true,
  setLoading: () => {},
};
export const LoadingContext = createContext<LoadingProps>(defaultContextValue);

export const LoadingContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const contextItems = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={contextItems}>
      {children}
    </LoadingContext.Provider>
  );
};
