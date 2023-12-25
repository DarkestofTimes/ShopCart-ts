import { DataItem } from "./Context/ContextProvider";
import { Form } from "react-router-dom";

interface sidebarProps {
  data: DataItem;
}

export const Sidebar = ({ data }: sidebarProps) => {
  return (
    <section className="min-h-[93vh] border-solid border-2 border-black col-span-1 p-4">
      <Searchbox data={data} />
    </section>
  );
};

const Searchbox = ({ data }: sidebarProps) => {
  const handleChange = () => {};
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
