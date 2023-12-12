import { DataItem } from "./ContextProvider";
import { ChangeEvent } from "react";

interface sidebarProps {
  data: DataItem[];
  setItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

export const Sidebar = ({ data, setItems }: sidebarProps) => {
  return (
    <section className="min-h-[93vh] border-solid border-2 border-black col-span-1 p-4">
      <Searchbox data={data} setItems={setItems} />
    </section>
  );
};

const Searchbox = ({ data, setItems }: sidebarProps) => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const regexPattern = new RegExp(ev.target.value, "i");
    if (ev.target.value === "") {
      const temp = [...data];
      const sorted = temp.sort((a, b) => {
        return b.rating.count - a.rating.count;
      });
      setItems(sorted);
    } else {
      const filteredItems = data.filter((item) => {
        return regexPattern.test(item.title);
      });
      setItems(filteredItems);
    }
  };
  return (
    <div className="h-10 flex border-solid border-2 border-black ">
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Search"
        className="p-2 w-full focus:outline-none focus:ring"
        onChange={handleChange}
      />
      <button className="w-12 border-l-2 border-black ">S</button>
    </div>
  );
};
