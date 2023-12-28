import { createContext, useState } from "react";

export const ArgsContext = createContext(/* <PricingContext> */ {});
/* React.FC<ContextProps> */
export const ArgsContextProvider = ({ children }) => {
  const [selectedArgs, setSelectedArgs] = useState({
    metacritic: 0,
    search_precise: false,
    dates: [1960, 2024],
  });

  const contextItems = {
    selectedArgs,
    setSelectedArgs,
  };

  return (
    <ArgsContext.Provider value={contextItems}>{children}</ArgsContext.Provider>
  );
};
