export const Sidebar = () => {
  return (
    <section className="min-h-[93vh] border-solid border-2 border-black col-span-1 p-4">
      <Searchbar />
    </section>
  );
};

const Searchbar = () => {
  return (
    <div className="h-10 flex border-solid border-2 border-black ">
      <input
        type="text"
        placeholder="Search"
        className="p-2 w-full focus:outline-none focus:ring"
      />
      <button className="w-12 border-l-2 border-black ">S</button>
    </div>
  );
};
