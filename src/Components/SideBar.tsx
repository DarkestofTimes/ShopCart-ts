import { DataItem, Items } from "./ContextProvider";
import { ChangeEvent } from "react";
import { Form } from "react-router-dom";

interface sidebarProps {
  data: DataItem;
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
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
    const filteredItems = data.results.filter((item) => {
      return regexPattern.test(item.name);
    });
    setItems(filteredItems);
  };
  return (
    <Form
      method="post"
      className="h-10 flex border-solid border-2 border-black ">
      <input
        name="search"
        id="search"
        type="search"
        placeholder="Search"
        className="p-2 w-full focus:outline-none focus:ring"
        onChange={handleChange}
      />
      <button type="submit" className="w-12 border-l-2 border-black ">
        S
      </button>
    </Form>
  );
};
