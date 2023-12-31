import "./doubleSlider.css";
import { ArgsContext } from "./SidebarContext/ArgsContext";

export const DoubleSliderYears = ({
  selectedArgs,
  setSelectedArgs,
}: ArgsContext) => {
  const minVal = 1960;
  const maxVal = new Date().getFullYear();

  const minGap = 1;
  const handleMin = (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSelectedArgs = selectedArgs.dates;
    newSelectedArgs[index] = Number(ev.target.value);
    setSelectedArgs({
      ...selectedArgs,
      dates: newSelectedArgs,
    });
    const gap = selectedArgs.dates[1] - selectedArgs.dates[0];
    if (gap <= minGap) {
      setSelectedArgs({
        ...selectedArgs,
        dates: [selectedArgs.dates[1] - minGap, selectedArgs.dates[1]],
      });
    }
  };

  const handleMax = (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSelectedArgs = selectedArgs.dates;
    newSelectedArgs[index] = Number(ev.target.value);
    setSelectedArgs({
      ...selectedArgs,
      dates: newSelectedArgs,
    });
    const gap = selectedArgs.dates[1] - selectedArgs.dates[0];
    if (gap <= minGap) {
      setSelectedArgs({
        ...selectedArgs,
        dates: [selectedArgs.dates[0], selectedArgs.dates[0] + minGap],
      });
    }
  };

  return (
    <div className="sliderContainer w-full p-5 pt-2 pb-2 ">
      <label htmlFor="minInput" className="block mb-16">
        Release years:
      </label>
      <div className=" rangeSlider">
        <span
          className="sliderTrack"
          style={{
            left: `${
              ((selectedArgs.dates[0] - minVal) * 100) / (maxVal - minVal)
            }%`,
            right: `${
              ((maxVal - selectedArgs.dates[1]) * 100) / (maxVal - minVal)
            }%`,
          }}></span>
        <input
          name="minInput"
          id="minInput"
          type="range"
          min={minVal}
          max={maxVal}
          value={selectedArgs.dates[0]}
          onChange={(ev) => {
            handleMin(ev, 0);
          }}
          className="minInput"
        />
        <input
          name="maxInput"
          id="maxInput"
          type="range"
          min={minVal}
          max={maxVal}
          value={selectedArgs.dates[1]}
          onChange={(ev) => {
            handleMax(ev, 1);
          }}
          className="maxInput"
        />
        <div
          className="minVal tooltip border-2 border-purple-600 rounded p-2"
          style={{
            left: `${
              ((selectedArgs.dates[0] - minVal) * 100) / (maxVal - minVal)
            }%`,
          }}>
          {selectedArgs.dates[0]}
        </div>
        <div
          className="maxVal tooltip border-2 border-purple-600 rounded p-2"
          style={{
            right: `${
              ((maxVal - selectedArgs.dates[1]) * 100) / (maxVal - minVal)
            }%`,
          }}>
          {selectedArgs.dates[1]}
        </div>
      </div>
    </div>
  );
};
