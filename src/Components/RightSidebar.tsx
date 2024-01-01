import { useCartContext } from "./Context/ContextProvider";

export const RightSidebar = () => {
  const { cart, setCart } = useCartContext();

  return (
    <section className="col-start-4 row-span-full  w-full border-2 border-purple-600 rounded mt-16"></section>
  );
};
