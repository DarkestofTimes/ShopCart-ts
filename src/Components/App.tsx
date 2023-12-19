import { ContextProvider } from "./ContextProvider";
import { InitialFetch } from "./FetchData";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ContextProvider>
      <InitialFetch />
      {children}
    </ContextProvider>
  );
};
