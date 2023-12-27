import { useGenresContext } from "./SidebarContext/SidebarContextProvider.tsx";
import { handleClick } from "./SidebarFunctions/handleClick.ts";

export const GenresContainer = ({ genres }) => {
  const { selectedGenres, setSelectedGenres } = useGenresContext();

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {genres.results.map((genre) => (
        <Genre
          key={genre.id}
          genre={genre}
          selected={selectedGenres}
          setSelected={setSelectedGenres}
        />
      ))}
    </section>
  );
};

const Genre = ({ genre, selected, setSelected }) => {
  const scale = selected.some((item) => item.id === genre.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff]"
    : "border-purple-600";
  return (
    <span
      className={`rounded border-2 w-min content-center   p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 ${scale} flex flex-nowrap items-center gap-2 p-2 text-lg`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(genre.id, genre.name, selected, setSelected);
      }}
      role="button">
      {genre.name}{" "}
      <span className="text-xs h-full bg-purple-900/50 rounded p-[1px] pr-[3px] pl-[3px]">
        {genre.games_count}
      </span>
    </span>
  );
};
