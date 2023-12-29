import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

interface Args {
  metacritic: number;
  search_precise: boolean;
  dates: number[];
}

export interface ArgsContext {
  selectedArgs: Args;
  setSelectedArgs: React.Dispatch<React.SetStateAction<Args>>;
}

const ArgsContextValue: ArgsContext = {
  selectedArgs: {
    metacritic: 0,
    search_precise: false,
    dates: [1960, 2024],
  },
  setSelectedArgs: () => {},
};

export const ArgsContext = createContext<ArgsContext>(ArgsContextValue);

export const ArgsContextProvider = ({ children }: ContextProps) => {
  const [selectedArgs, setSelectedArgs] = useState<Args>({
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
