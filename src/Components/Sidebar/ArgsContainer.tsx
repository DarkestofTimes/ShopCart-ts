import { useArgsContext } from "./SidebarContext/SidebarContextProvider.tsx";
import { DoubleSliderYears } from "./DoubleSliderYears";
import { ArgsContext } from "./SidebarContext/ArgsContext";
import "./singleSlider.css";

export const SearchArgsContainer = () => {
  const { selectedArgs, setSelectedArgs } = useArgsContext();

  return (
    <section className="w-full h-min p-2 border-2 border-purple-600 rounded">
      <PreciseSearch
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
      <MetacriticSlider
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
      <DoubleSliderYears
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
    </section>
  );
};

const MetacriticSlider = ({ selectedArgs, setSelectedArgs }: ArgsContext) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArgs({
      ...selectedArgs,
      metacritic: Number(ev.target.value),
    });
  };

  return (
    <div className="w-full flex flex-wrap place-items-center p-5 pb-16 border-b-2 border-purple-600">
      <label htmlFor="metacritSlider" className="w-full mb-4">
        Metacritic minimum:{" "}
      </label>
      <div className=" rangeSlider">
        <span
          className="sliderTrack"
          style={{
            right: `${((100 - selectedArgs.metacritic) * 100) / (100 - 0)}%`,
            width: `${selectedArgs.metacritic}%`,
          }}></span>
        <input
          id="metacritSlider"
          type="range"
          min={0}
          max={100}
          value={selectedArgs.metacritic}
          onChange={handleChange}
          className="minInput"
        />
        <span
          className="p-2 text-xl border-2 border-purple-600 rounded tooltip maxVal"
          style={{
            right: `${((100 - selectedArgs.metacritic) * 100) / (100 - 0)}%`,
          }}>
          {selectedArgs.metacritic}
        </span>
      </div>
    </div>
  );
};

const PreciseSearch = ({ selectedArgs, setSelectedArgs }: ArgsContext) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArgs({
      ...selectedArgs,
      search_precise: ev.target.checked,
    });
  };
  return (
    <div className="flex w-full items-center gap-4 pb-3 pt-3 pl-5 pr-5 border-t-2 border-b-2 border-purple-600">
      <label htmlFor="preciseCheckBox" className="text-xl">
        Enable precise search:
      </label>
      <input
        id="preciseCheckBox"
        type="checkbox"
        className="h-4 w-4 cursor-pointer scale-150 "
        onChange={handleChange}
      />
    </div>
  );
};
