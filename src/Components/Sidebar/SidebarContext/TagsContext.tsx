import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface tag {
  id: number;
  slug: string;
  name: string;
  games_count: number;
}

export interface TagsContext {
  selectedTags: tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<tag[]>>;
}

const TagsContextValue: TagsContext = {
  selectedTags: [],
  setSelectedTags: () => {},
};

export const TagsContext = createContext<TagsContext>(TagsContextValue);

export const TagsContextProvider = ({ children }: ContextProps) => {
  const [selectedTags, setSelectedTags] = useState<tag[]>([]);

  const contextItems = {
    selectedTags,
    setSelectedTags,
  };

  return (
    <TagsContext.Provider value={contextItems}>{children}</TagsContext.Provider>
  );
};
