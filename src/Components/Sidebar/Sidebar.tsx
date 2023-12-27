import { Link, useRouteLoaderData } from "react-router-dom";
import { useRef } from "react";
import { SelectedContainer } from "./SelectedContainer";
import { CollapseContainer } from "./CollapseContainer";
import { GenresContainer } from "./GenresContainer";
import { TagsContainer } from "./TagsContainer";
import { PlatformsContainer } from "./PlatformsContainer";

export const Sidebar = () => {
  const { genres, platforms, tags } = useRouteLoaderData("root");
  const pathConstructRef = useRef({});

  return (
    <section className="h-full border-solid border-2 border-purple-600 col-span-1 p-4 mt-10 grid grid-rows-[repeat(6,min-content)] gap-1 ">
      <Searchbox pathConstructRef={pathConstructRef} />
      <SelectedContainer />
      <SearchArgsContainer pathConstructRef={pathConstructRef} />
      <CollapseContainer value={"Platforms"}>
        <PlatformsContainer
          pathConstructRef={pathConstructRef}
          platforms={platforms}
        />
      </CollapseContainer>
      <CollapseContainer value={"Genres"}>
        <GenresContainer pathConstructRef={pathConstructRef} genres={genres} />
      </CollapseContainer>
      <CollapseContainer value={"Tags"}>
        <TagsContainer pathConstructRef={pathConstructRef} tags={tags} />
      </CollapseContainer>
    </section>
  );
};

const Searchbox = ({ pathConstructRef }) => {
  return (
    <section className="h-10 flex border-solid border-2 border-black w-full">
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Search"
        className="p-2 w-full focus:outline-none focus:ring bg-inherit border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-[#f0f8ff]  transition-all duration-200"
      />
      <button
        type="submit"
        className="w-12 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 transition-all duration-200">
        S
      </button>
    </section>
  );
};

const SearchArgsContainer = ({ pathConstructRef }) => {
  return <section className="w-full h-min"></section>;
};
