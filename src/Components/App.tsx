import { ContextProvider } from "./ContextProvider";
import { FetchData } from "./FetchData";

export const App = ({ children }) => {
  return (
    <ContextProvider>
      <FetchData />
      {children}
    </ContextProvider>
  );
};
