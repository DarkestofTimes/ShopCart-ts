import { useState, useEffect, ChangeEvent } from "react";
import { DataItem } from "./ContextProvider";

interface SortProps {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

export const SortSelector = ({ data, setData }: SortProps) => {
  const [selected, setSelected] = useState("count");
  const handleSelection = (ev: ChangeEvent<HTMLSelectElement>) => {
    setSelected(ev.target.value);
  };
  useEffect(() => {
    const tempItems = [...data];
    if (selected === "price") {
      const sorted = tempItems.sort((a, b) => {
        return a[selected] - b[selected];
      });
      setData(sorted);
    }
    if (selected === "count" || selected === "rate") {
      const sorted = tempItems.sort((a, b) => {
        return b["rating"][selected] - a["rating"][selected];
      });
      setData(sorted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="col-span-full justify-self-end mr-8">
      <label htmlFor="selector">Sort by:</label>
      <select
        id="selector"
        name="items"
        value={selected}
        onChange={handleSelection}
        className="col-span-full h-8 w-26 justify-self-end">
        <option value="count">Popularity</option>
        <option value="rate">Rating</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};
