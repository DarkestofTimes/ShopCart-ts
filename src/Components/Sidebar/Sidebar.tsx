import { Link, useRouteLoaderData } from "react-router-dom";
import { platformsSVG } from "../platformsSVG.tsx";
import { useRef, useState, useEffect } from "react";
import { handleClick } from "./handleClick";

export const Sidebar = () => {
  const { genres, platforms, tags } = useRouteLoaderData("root");
  const pathConstructRef = useRef({});
  const selectedItems = useRef({});

  console.log(genres, platforms, tags);
  return (
    <section className="h-full border-solid border-2 border-purple-600 col-span-1 p-4 mt-10 grid grid-rows-[repeat(6,min-content)] gap-1 ">
      <Searchbox pathConstructRef={pathConstructRef} />
      <SelectedContainer pathConstructRef={pathConstructRef} />
      <SearchArgsContainer pathConstructRef={pathConstructRef} />
      <CollapseContainer value={"Platforms"}>
        <PlatformsContainer
          pathConstructRef={pathConstructRef}
          platforms={platforms}
          selectedItems={selectedItems}
        />
      </CollapseContainer>
      <CollapseContainer value={"Genres"}>
        <GenresContainer
          pathConstructRef={pathConstructRef}
          genres={genres}
          selectedItems={selectedItems}
        />
      </CollapseContainer>
      <CollapseContainer value={"Tags"}>
        <TagsContainer
          pathConstructRef={pathConstructRef}
          tags={tags}
          selectedItems={selectedItems}
        />
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

const SelectedContainer = ({ pathConstructRef, selectedItems }) => {
  return <section className="w-full h-min"></section>;
};

const SearchArgsContainer = ({ pathConstructRef }) => {
  return <section className="w-full h-min"></section>;
};

const CollapseContainer = ({ children, value }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={`${
        collapsed ? "h-8" : "h-full"
      } overflow-hidden transition-all duration-400`}>
      <h2
        className="bg-purple-800/50 w-full h-8 rounded transition-all duration-1000 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl "
        onClick={() => setCollapsed(!collapsed)}>
        {value}
      </h2>
      {children}
    </div>
  );
};

const PlatformsContainer = ({ pathConstructRef, selectedItems, platforms }) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    pathConstructRef.current.platforms = "&platforms=" + selected.join(",");
    selectedItems.current.platforms = selected;
    console.log(pathConstructRef);
    console.log(selectedItems);
  }, [selected]);

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {platforms.results.map((platform) => (
        <Platform
          key={platform.id}
          platform={platform}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};

const Platform = ({ platform, selected, setSelected }) => {
  const scale = selected.some((item) => item.id === platform.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff]"
    : "";
  return (
    <span
      className={`rounded border-2 w-min content-center border-purple-600  p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600  ${scale} flex flex-nowrap items-center gap-2 flex-row-reverse`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(platform.id, platform.name, selected, setSelected);
      }}>
      {platform.name}{" "}
      <span className=" bg-purple-900/50 rounded h-10 w-10">
        {platformsSVG[platform.slug]}
      </span>
    </span>
  );
};

const GenresContainer = ({ pathConstructRef, selectedItems, genres }) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    pathConstructRef.current.genres = "&genres=" + selected.join(",");
    selectedItems.current.genres = selected;
  }, [selected]);

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {genres.results.map((genre) => (
        <Genre
          key={genre.id}
          genre={genre}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};

const Genre = ({ genre, selected, setSelected }) => {
  const scale = selected.some((item) => item.id === genre.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff]"
    : "";
  return (
    <span
      className={`rounded border-2 w-min content-center border-purple-600  p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 ${scale} flex flex-nowrap items-center gap-2 p-2 text-lg`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(genre.id, genre.name, selected, setSelected);
      }}>
      {genre.name}{" "}
      <span className="text-xs h-full bg-purple-900/50 rounded p-[1px] pr-[3px] pl-[3px]">
        {genre.games_count}
      </span>
    </span>
  );
};

const TagsContainer = ({ pathConstructRef, selectedItems, tags }) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    pathConstructRef.current.tags = "&tags=" + selected.join(",");
    selectedItems.current.tags = selected;
  }, [selected]);

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {tags.results.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};

const Tag = ({ tag, selected, setSelected }) => {
  const scale = selected.some((item) => item.id === tag.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff]"
    : "";
  return (
    <span
      className={`rounded border-2 content-center border-purple-600  p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 w-min text-sm ${scale}`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(tag.id, tag.name, selected, setSelected);
      }}>
      {tag.name}{" "}
      <span className="text-xs h-full bg-purple-900/50 rounded p-[1px] pr-[3px] pl-[3px]  ">
        {tag.games_count}
      </span>
    </span>
  );
};
