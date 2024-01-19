import { ItemProp } from "../ItemInfoContainer";
import { Cart } from "../../../Context/CartContext";

interface BtnProps extends ItemProp {
  pricing?: {
    id: number;
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: string;
  };
  Cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

export const AddToBtnContainer = ({
  pricing,
  details,
  Cart,
  setCart,
}: BtnProps) => {
  if (!pricing) {
    return;
  }

  const AddToSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24">
      <path
        d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="#f0f8ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-darkreader-inline-stroke=""
        className="group-hover:stroke-green-800"></path>{" "}
    </svg>
  );

  const handleClick = () => {
    if (!Cart.results.some((item) => item.id === details.id)) {
      setCart({
        ...Cart,
        results: [
          ...Cart.results,
          {
            id: details.id,
            name: details.name,
            background_image: details.background_image,
            pricing: {
              price: pricing.price,
              onSale: pricing.onSale,
              salePrice: pricing.salePrice,
              salePercent: pricing.salePercent,
            },
          },
        ],
        count: Cart.count + 1,
      });
    }
  };

  return (
    <section className="h-full w-full ">
      <button
        className="lg:text-4xl text-2xl grid w-full gap-1 grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 font-bold rounded border-green-800 border-2 bg-green-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-green-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-green-800 focus:scale-110 place-items-center group"
        onClick={handleClick}>
        {pricing.onSale ? (
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-3  place-items-center h-min w-full">
            <span className="text-base pr-2">
              <s>{pricing.price}$</s>
            </span>
            <span className="lg:col-start-2 text-2xl font-normal ">
              -{pricing.salePercent}
            </span>
            <span className="row-span-2 w-full pl-2">{pricing.salePrice}$</span>
          </div>
        ) : (
          <span className="text-4xl font-bold w-full ">{pricing.price}$</span>
        )}
        {AddToSVG}
      </button>
    </section>
  );
};

export const RemoveFromBtnContainer = ({
  details,
  Cart,
  setCart,
}: BtnProps) => {
  const RemoveFromSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 mr-auto ml-auto">
      <path
        d="M21 5L19 12H7.37671M20 16H8L6 3H3M13.5 3V9M13.5 3L11.5 5M13.5 3L15.5 5M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="#f0f8ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-darkreader-inline-stroke=""
        className="group-hover:stroke-green-800"></path>{" "}
    </svg>
  );

  const handleClick = () => {
    setCart({
      ...Cart,
      results: Cart.results.filter((item) => item.id !== details.id),
      count: Cart.count - 1,
    });
  };
  return (
    <section className="w-full h-full">
      <button
        className="text-4xl font-bold rounded  border-green-800 border-2 lg:p-4 w-full bg-green-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-green-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-green-800 focus:scale-110 group "
        onClick={handleClick}>
        {RemoveFromSVG}
      </button>
    </section>
  );
};
