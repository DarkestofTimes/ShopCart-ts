import { useCartContext } from "./Context/ContextProvider";

export const RightSidebar = () => {
  const { cart } = useCartContext();

  return (
    <section className="sm:col-start-4 row-span-full sm:mt-16 mt-8 p-2 flex flex-col gap-4">
      <div className="border-2 border-purple-600 rounded p-2 flex items-center gap-4 font-bold text-2xl">
        <span className="bg-[#f0f8ff] text-purple-600 rounded flex items-center w-min p-1 text-2xl font-bold">
          {cart.count}{" "}
        </span>{" "}
        items in the cart{" "}
      </div>
      <div className="border-2 border-purple-600 rounded p-2 flex items-center gap-4 font-bold text-2xl">
        <span className="bg-[#f0f8ff] text-purple-600 rounded flex items-center w-min p-1 text-2xl font-bold">
          {cart.sum}$
        </span>
        Total
      </div>
      <button className=" rounded bg-purple-600 text-[#f0f8ff] p-4 text-3xl font-bold hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 transition-colors duration-200 text-center grid grid-rows-1">
        Check Out <span className="text-xs h-min">(Does nothing)</span>
      </button>
    </section>
  );
};
