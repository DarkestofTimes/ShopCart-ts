import {
  useGenresContext,
  usePlatformsContext,
  useTagsContext,
} from "./SidebarContext/SidebarContextProvider.tsx";
import { handleClick } from "./SidebarFunctions/handleClick.ts";

export const SelectedContainer = () => {
  const { selectedPlatforms, setSelectedPlatforms } = usePlatformsContext();
  const { selectedGenres, setSelectedGenres } = useGenresContext();
  const { selectedTags, setSelectedTags } = useTagsContext();
  return (
    <section className="w-full h-min flex flex-wrap gap-1 p-5 border-2 border-purple-600 rounded">
      {selectedPlatforms.length > 0 ||
      selectedGenres.length > 0 ||
      selectedTags.length > 0 ? (
        <h2 className="w-full">Active:</h2>
      ) : (
        ""
      )}

      {selectedPlatforms.map((plat) => (
        <SelectedElement
          key={plat.id}
          item={plat}
          selected={selectedPlatforms}
          setSelected={setSelectedPlatforms}
        />
      ))}
      {selectedGenres.map((gen) => (
        <SelectedElement
          key={gen.id}
          item={gen}
          selected={selectedGenres}
          setSelected={setSelectedGenres}
        />
      ))}
      {selectedTags.map((tag) => (
        <SelectedElement
          key={tag.id}
          item={tag}
          selected={selectedTags}
          setSelected={setSelectedTags}
        />
      ))}
    </section>
  );
};

const SelectedElement = ({ item, selected, setSelected }) => {
  return (
    <span className="rounded border-2 border-purple-600 h-min w-min whitespace-nowrap p-1">
      {item.name}{" "}
      <span
        className="cursor-pointer p-1 bg-purple-600/50 rounded hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600"
        onClick={(ev) => {
          ev.stopPropagation();
          handleClick(item.id, item.name, selected, setSelected);
        }}>
        X
      </span>{" "}
    </span>
  );
};
