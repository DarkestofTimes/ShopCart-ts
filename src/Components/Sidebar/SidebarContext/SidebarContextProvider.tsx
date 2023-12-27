import { useContext, ReactNode } from "react";
import { GenresContext, GenresContextProvider } from "./GenresContext";
import { PlatformsContext, PlatformsContextProvider } from "./PlatformsContext";
import { TagsContext, TagsContextProvider } from "../TagsContext";

export const SidebarContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  return (
    <TagsContextProvider>
      <PlatformsContextProvider>
        <GenresContextProvider>{children}</GenresContextProvider>
      </PlatformsContextProvider>
    </TagsContextProvider>
  );
};

export const useGenresContext = () => useContext(GenresContext);
export const usePlatformsContext = () => useContext(PlatformsContext);
export const useTagsContext = () => useContext(TagsContext);
