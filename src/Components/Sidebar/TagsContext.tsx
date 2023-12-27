import { createContext, useState } from "react";

export const TagsContext = createContext(/* <PricingContext> */ {});
/* React.FC<ContextProps> */
export const TagsContextProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const contextItems = {
    selectedTags,
    setSelectedTags,
  };

  return (
    <TagsContext.Provider value={contextItems}>{children}</TagsContext.Provider>
  );
};
