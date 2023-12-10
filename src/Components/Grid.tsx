export const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,max(220px,17vw))] grid-rows-auto gap-4 p-4 col-span-3">
      {children}
    </div>
  );
};
