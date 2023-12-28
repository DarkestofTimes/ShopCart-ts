import { useRouteLoaderData } from "react-router-dom";
import { SelectedContainer } from "./SelectedContainer";
import { CollapseContainer } from "./CollapseContainer";
import { GenresContainer } from "./GenresContainer";
import { TagsContainer } from "./TagsContainer";
import { PlatformsContainer } from "./PlatformsContainer";
import { SearchArgsContainer } from "./ArgsContainer";
import { SearchboxContainer } from "./SearchboxContainer";

export const Sidebar = () => {
  const { genres, platforms, tags } = useRouteLoaderData("root");

  return (
    <section className="h-full border-solid border-2 border-purple-600 col-span-1 p-4 mt-10 grid grid-rows-[repeat(6,min-content)] gap-1 ">
      <SearchboxContainer />
      <SelectedContainer />
      <SearchArgsContainer />
      <CollapseContainer value={"Platforms"}>
        <PlatformsContainer platforms={platforms} />
      </CollapseContainer>
      <CollapseContainer value={"Genres"}>
        <GenresContainer genres={genres} />
      </CollapseContainer>
      <CollapseContainer value={"Tags"}>
        <TagsContainer tags={tags} />
      </CollapseContainer>
    </section>
  );
};
