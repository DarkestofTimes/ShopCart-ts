import { createContext, useState } from "react";

export const GenresContext = createContext(/* <PricingContext> */ {});
/* React.FC<ContextProps> */
export const GenresContextProvider = ({ children }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const contextItems = {
    selectedGenres,
    setSelectedGenres,
  };

  return (
    <GenresContext.Provider value={contextItems}>
      {children}
    </GenresContext.Provider>
  );
};
