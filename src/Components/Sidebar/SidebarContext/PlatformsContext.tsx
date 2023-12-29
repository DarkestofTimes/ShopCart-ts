import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface platform {
  id: number;
  slug: string;
  name: string;
  games_count: number;
}

export interface PlatformsContext {
  selectedPlatforms: platform[];
  setSelectedPlatforms: React.Dispatch<React.SetStateAction<platform[]>>;
}

const PlatformsContextValue: PlatformsContext = {
  selectedPlatforms: [],
  setSelectedPlatforms: () => {},
};

export const PlatformsContext = createContext<PlatformsContext>(
  PlatformsContextValue
);

export const PlatformsContextProvider = ({ children }: ContextProps) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<platform[]>([]);

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
