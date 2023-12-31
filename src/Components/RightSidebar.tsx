import { useCartContext } from "./Context/ContextProvider";

export const RightSidebar = () => {
  const { cart, setCart } = useCartContext();

  return (
    <section className="col-start-4 row-span-full h-screen w-full"></section>
  );
};
