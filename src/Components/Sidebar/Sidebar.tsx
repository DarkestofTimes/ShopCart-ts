import { useRouteLoaderData } from "react-router-dom";
import { SelectedContainer } from "./SelectedContainer";
import { CollapseContainer } from "./CollapseContainer";
import { GenresContainer } from "./GenresContainer";
import { TagsContainer } from "./TagsContainer";
import { PlatformsContainer } from "./PlatformsContainer";
import { SearchArgsContainer } from "./ArgsContainer";
import { SearchboxContainer } from "./SearchboxContainer";
import { formatDateAddYear } from "../../Functions/formatDateAddYear";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { genres, platforms, tags } = useRouteLoaderData("root");

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

const PremadeLinks = () => {
  return (
    <section className="w-full p-2 border-2 border-purple-600 rounded flex gap-2 flex-wrap">
      <BestOfTheYear />
      <LastThirty />
    </section>
  );
};

const BestOfTheYear = () => {
  const currentDate = new Date();
  const yearMinus = formatDateAddYear(currentDate, false);
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const currentYear = formatDateAddYear(currentDate, false);
  return (
    <Link
      to={`/shop/1&dates=${yearMinus},${currentYear}`}
      className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800  focus:bg-[#f0f8ff] focus:text-purple-800  justify-center">
      Best of the Year
    </Link>
  );
};

const LastThirty = () => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const currentMonth = formatDateAddYear(currentDate, false);
  currentDate.setMonth(currentDate.getMonth() - 1);
  const monthMinus = formatDateAddYear(currentDate, false);

  return (
    <Link
      to={`/shop/1&dates=${monthMinus},${currentMonth}`}
      className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800  focus:bg-[#f0f8ff] focus:text-purple-800  justify-center">
      Last 30 days
    </Link>
  );
};
