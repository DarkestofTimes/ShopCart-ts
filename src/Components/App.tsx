import { ContextProvider } from "./ContextProvider";
import { FetchData } from "./FetchData";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ContextProvider>
      <FetchData />
      {children}
    </ContextProvider>
  );
};
