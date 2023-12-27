import { createContext, useState } from "react";

export const PlatformsContext = createContext(/* <PricingContext> */ {});
/* React.FC<ContextProps> */
export const PlatformsContextProvider = ({ children }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const contextItems = {
    selectedPlatforms,
    setSelectedPlatforms,
  };

  return (
    <PlatformsContext.Provider value={contextItems}>
      {children}
    </PlatformsContext.Provider>
  );
};
