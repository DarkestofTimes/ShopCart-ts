import { handleClick } from "./SidebarFunctions/handleClick.ts";
import { useTagsContext } from "./SidebarContext/SidebarContextProvider.tsx";

export const TagsContainer = ({ tags }) => {
  const { selectedTags, setSelectedTags } = useTagsContext();

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {tags.results.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          selected={selectedTags}
          setSelected={setSelectedTags}
        />
      ))}
    </section>
  );
};

const Tag = ({ tag, selected, setSelected }) => {
  const scale = selected.some((item) => item.id === tag.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff] "
    : "border-purple-600";
  return (
    <span
      className={`rounded border-2 content-center   p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 w-min text-sm ${scale}`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(tag.id, tag.name, selected, setSelected);
      }}
      role="button">
      {tag.name}{" "}
      <span className="text-xs h-full bg-purple-900/50 rounded p-[1px] pr-[3px] pl-[3px]  ">
        {tag.games_count}
      </span>
    </span>
  );
};
