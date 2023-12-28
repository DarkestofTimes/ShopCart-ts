import { useArgsContext } from "./SidebarContext/SidebarContextProvider.tsx";

export const SearchArgsContainer = () => {
  const { selectedArgs, setSelectedArgs } = useArgsContext();

  return (
    <section className="w-full h-min p-2">
      <PreciseSearch
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
      <MetacriticSlider
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
      <YearSlider
        selectedArgs={selectedArgs}
        setSelectedArgs={setSelectedArgs}
      />
    </section>
  );
};

const MetacriticSlider = ({ selectedArgs, setSelectedArgs }) => {
  const handleChange = (ev) => {
    setSelectedArgs({
      ...selectedArgs,
      metacritic: ev.target.value,
    });
  };

  return (
    <div className="w-full flex flex-wrap place-items-center">
      <label htmlFor="metacritSlider" className="w-full">
        Metacritic minimum:{" "}
      </label>
      <div className="flex flex-nowrap w-full">
        <input
          type="range"
          id="metacritSlider"
          min={0}
          max={100}
          className="p-2  w-full"
          onChange={handleChange}
          value={selectedArgs.metacritic}
        />{" "}
        <span className="p-2 text-xl border-2 border-purple-600 rounded m-2">
          {selectedArgs.metacritic}
        </span>
      </div>
    </div>
  );
};

const YearSlider = ({ selectedArgs, setSelectedArgs }) => {
  const handleSliderChange = (event, index) => {
    const newSelectedArgs = [...selectedArgs];
    newSelectedArgs[index] = parseInt(event.target.value, 10);
    setSelectedArgs({
      ...selectedArgs,
      dates: !newSelectedArgs,
    });
  };

  return (
    <div className="w-64 mx-auto my-8">
      <label className="block mb-2">Release Years</label>
      <div className="flex justify-between">
        <input
          type="range"
          min="0"
          max="100"
          value={selectedArgs[0]}
          onChange={(event) => handleSliderChange(event, 0)}
          className="w-full h-4 rounded-none"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={selectedArgs[1]}
          onChange={(event) => handleSliderChange(event, 1)}
          className="w-full h-4 "
        />
      </div>
    </div>
  );
};

const PreciseSearch = ({ selectedArgs, setSelectedArgs }) => {
  const handleChange = (ev) => {
    setSelectedArgs({
      ...selectedArgs,
      search_precise: ev.target.checked,
    });
  };
  return (
    <div className="flex w-full items-center gap-4 pb-3 pt-3">
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
