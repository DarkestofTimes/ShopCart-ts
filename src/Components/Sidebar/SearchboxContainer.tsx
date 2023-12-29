import { splitParams } from "../../Functions/splitParams.ts";
import {
  usePlatformsContext,
  useTagsContext,
  useGenresContext,
  useArgsContext,
} from "./SidebarContext/SidebarContextProvider.tsx";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export const SearchboxContainer = () => {
  const [searchValue, setSearchValue] = useState();
  const handleChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  return (
    <section className="h-10 flex border-solid border-2 border-black w-full">
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

const SearchButton = ({ searchValue }) => {
  const { page } = useParams();
  const politeParams = splitParams(page);
  const { selectedPlatforms } = usePlatformsContext();
  const { selectedGenres } = useGenresContext();
  const { selectedTags } = useTagsContext();
  const { selectedArgs } = useArgsContext();
  const currentDate = new Date();
  const daysNadMonths =
    selectedArgs.dates[1] == currentDate.getFullYear()
      ? `-${currentDate.getMonth()}-${currentDate.getDate()}`
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
        `${daysNadMonths}`,
    };

    const path = Object.entries(pathObject)
      .filter(
        ([key, value]) => value !== undefined && value !== null && value !== ""
      )
      .map(([key, value]) => `&${key}=${value}`)
      .join("");

    return path;
  };

  const path =
    `/shop/1${politeParams.ordering ? politeParams.ordering : ""}` +
    constructPath();

  return (
    <Link
      to={path}
      className="w-12 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 transition-all duration-200 flex justify-center items-center rounded-r">
      S
    </Link>
  );
};