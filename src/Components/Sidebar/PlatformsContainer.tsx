import { platformsSVG } from "../platformsSVG.tsx";
import { usePlatformsContext } from "./SidebarContext/SidebarContextProvider.tsx";
import { handleClick } from "./SidebarFunctions/handleClick.ts";

interface platform {
  id: number;
  slug: string;
  name: string;
  games_count: number;
}

interface PlatformsProp {
  platforms: {
    results: platform[];
  };
}

export interface PlatformsContext {
  selectedPlatforms: platform[];
  setSelectedPlatforms: React.Dispatch<React.SetStateAction<platform[]>>;
}

interface PlatformProp {
  platform: { id: number; slug: string; name: string; games_count: number };
  selected: platform[];
  setSelected: React.Dispatch<React.SetStateAction<platform[]>>;
}

export const PlatformsContainer = ({ platforms }: PlatformsProp) => {
  const { selectedPlatforms, setSelectedPlatforms } = usePlatformsContext();

  return (
    <section className="w-full h-min flex flex-wrap gap-2 p-2">
      {platforms.results.map((platform) => (
        <Platform
          key={platform.id}
          platform={platform}
          selected={selectedPlatforms}
          setSelected={setSelectedPlatforms}
        />
      ))}
    </section>
  );
};

const Platform = ({ platform, selected, setSelected }: PlatformProp) => {
  const scale = selected.some((item) => item.id === platform.id)
    ? "scale-110 text-purple-600 border-[#f0f8ff]"
    : "border-purple-600";
  return (
    <span
      className={`rounded border-2 w-min content-center   p-1 whitespace-nowrap  cursor-pointer  transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600  ${scale} flex flex-nowrap items-center gap-2 flex-row-reverse`}
      onClick={(ev) => {
        ev.stopPropagation();
        handleClick(platform.id, platform.name, selected, setSelected);
      }}
      role="button">
      {platform.name}{" "}
      <span className=" bg-purple-900/50 rounded h-10 w-10">
        {platformsSVG[platform.slug]}
      </span>
    </span>
  );
};
