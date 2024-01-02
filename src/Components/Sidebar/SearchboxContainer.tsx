import { splitParams } from "../../Functions/splitParams.ts";
import {
  usePlatformsContext,
  useTagsContext,
  useGenresContext,
  useArgsContext,
} from "./SidebarContext/SidebarContextProvider.tsx";
import { Link, useParams } from "react-router-dom";
import { useState, ChangeEvent } from "react";

interface SearchProp {
  searchValue: string | undefined;
}

export const SearchboxContainer = () => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
  };

  return (
    <section className="h-14 flex border-solid border-2 border-black w-full text-xl">
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Search"
        className="p-2 w-full focus:outline-none focus:ring bg-inherit border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-[#f0f8ff]  transition-all duration-200 rounded-l"
        onChange={handleChange}
        value={searchValue}
      />
      <SearchButton searchValue={searchValue} />
    </section>
  );
};

const SearchButton = ({ searchValue }: SearchProp) => {
  const { page } = useParams();
  const politeParams = splitParams(page!);
  const { selectedPlatforms } = usePlatformsContext();
  const { selectedGenres } = useGenresContext();
  const { selectedTags } = useTagsContext();
  const { selectedArgs } = useArgsContext();
  const currentDate = new Date();
  const daysAndMonths =
    selectedArgs.dates[1] == currentDate.getFullYear()
      ? `-${(currentDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${currentDate
          .getDate()
          .toString()
          .padStart(2, "0")}`
      : "-01-01";

  const constructPath = () => {
    const pathObject = {
      platforms: selectedPlatforms.map((item) => item.id).join(","),
      genres: selectedGenres.map((item) => item.id).join(","),
      tags: selectedTags.map((item) => item.id).join(","),
      metacritic: selectedArgs.metacritic.toString() + ",100",
      search_precise: selectedArgs.search_precise,
      search: searchValue,
      dates:
        `${selectedArgs.dates[0]}` +
        "-01-01" +
        "," +
        `${selectedArgs.dates[1]}` +
        `${daysAndMonths}`,
    };

    const path = Object.entries(pathObject)
      .filter(
        ([, value]) => value !== undefined && value !== null && value !== ""
      )
      .map(([key, value]) => `&${key}=${value}`)
      .join("");

    return path;
  };

  const path =
    `/shop/1${politeParams.ordering ? politeParams.ordering : ""}` +
    constructPath();

  const lensSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#9333ea"
      data-darkreader-inline-stroke="">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#9333ea"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-darkreader-inline-stroke=""
          className="group-hover:stroke-[#f0f8ff] transition-all duration-200"></path>{" "}
      </g>
    </svg>
  );

  return (
    <Link
      to={path}
      className="w-14 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 transition-all duration-200 flex justify-center items-center rounded-r group">
      {lensSVG}
    </Link>
  );
};
