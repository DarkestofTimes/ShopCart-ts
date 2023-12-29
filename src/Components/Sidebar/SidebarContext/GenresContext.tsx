import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
}

export interface GenresContext {
  selectedGenres: genre[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<genre[]>>;
}

const GenresContextValue: GenresContext = {
  selectedGenres: [],
  setSelectedGenres: () => {},
};

export const GenresContext = createContext<GenresContext>(GenresContextValue);

export const GenresContextProvider = ({ children }: ContextProps) => {
  const [selectedGenres, setSelectedGenres] = useState<genre[]>([]);

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
