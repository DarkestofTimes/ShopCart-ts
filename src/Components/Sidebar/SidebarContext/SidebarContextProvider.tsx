import { useContext, ReactNode } from "react";
import { GenresContext, GenresContextProvider } from "./GenresContext";
import { PlatformsContext, PlatformsContextProvider } from "./PlatformsContext";
import { TagsContext, TagsContextProvider } from "./TagsContext";
import { ArgsContext, ArgsContextProvider } from "./ArgsContext";

interface ContextProps {
  children: ReactNode;
}

export const SidebarContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  return (
    <TagsContextProvider>
      <PlatformsContextProvider>
        <GenresContextProvider>
          <ArgsContextProvider>{children}</ArgsContextProvider>
        </GenresContextProvider>
      </PlatformsContextProvider>
    </TagsContextProvider>
  );
};

export const useGenresContext = () => useContext(GenresContext);
export const usePlatformsContext = () => useContext(PlatformsContext);
export const useTagsContext = () => useContext(TagsContext);
export const useArgsContext = () => useContext(ArgsContext);
