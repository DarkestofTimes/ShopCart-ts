import { useRouteLoaderData } from "react-router-dom";
import { SelectedContainer } from "./SelectedContainer";
import { CollapseContainer } from "./CollapseContainer";
import { GenresContainer } from "./GenresContainer";
import { TagsContainer } from "./TagsContainer";
import { PlatformsContainer } from "./PlatformsContainer";
import { SearchArgsContainer } from "./ArgsContainer";
import { SearchboxContainer } from "./SearchboxContainer";
import { PremadeLinks } from "./PremadeLinks";

interface SidebarLoaderResult {
  genres: {
    results: {
      id: number;
      slug: string;
      name: string;
      games_count: number;
    }[];
  };
  platforms: {
    results: {
      id: number;
      slug: string;
      name: string;
      games_count: number;
    }[];
  };
  tags: {
    results: {
      id: number;
      slug: string;
      name: string;
      games_count: number;
    }[];
  };
}

export const Sidebar = () => {
  const { genres, platforms, tags } = useRouteLoaderData(
    "root"
  ) as SidebarLoaderResult;

  return (
    <section className="h-full  col-span-1  mt-24 grid grid-rows-[repeat(6,min-content)] gap-1 p-2 ">
      <PremadeLinks />
      <SelectedContainer />
      <SearchboxContainer />
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
