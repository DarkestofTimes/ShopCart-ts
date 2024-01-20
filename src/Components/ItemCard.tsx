import { Link } from "react-router-dom";
import { ShopItem } from "./Context/ContextProvider.tsx";
import { platformsSVG } from "./platformsSVG.tsx";
import { useCartContext } from "./Context/ContextProvider";
import { Spinnie } from "./Spinnie.tsx";
import { useState } from "react";
import { fakePricing } from "../Functions/fakePricing.ts";

interface ItemCardProps {
  item: ShopItem;
  routeValue: string;
}

interface ItemProp {
  item: ShopItem;
}

export const ItemCard = ({ item, routeValue }: ItemCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const pricedItem = item.pricing ? item : fakePricing(item);

  return (
    <Link
      to={`/items/${routeValue}/${item.id}`}
      className=" h-min w-min hover:scale-105 focus:scale-105 transition-all duration-200 ">
      <div className="border-solid border-2 border-purple-600 rounded sm:w-[max(220px,15vw)] w-[max(290px,15vw)] aspect-square hover:border-[#f0f8ff] focus:border-[#f0f8ff] relative">
        {item.isInCart && <CartIndicator />}
        {isLoading && <Spinnie />}
        <img
          src={item.background_image}
          alt={item.name}
          title={item.name}
          onLoad={handleImageLoad}
          className="w-full h-full object-cover "
          loading="lazy"
        />
        <div className="grid grid-cols-3  text-2xl font-bold items-center ">
          {routeValue === "shop" ? (
            <MetacritContainer item={item} />
          ) : (
            <RemoveFromCart ID={item.id} />
          )}
          <PriceContainer item={pricedItem} />
          <RatingContainer item={item} />
        </div>
      </div>
      <PlatformContainer item={item} />
      <h3 className="font-bold text-2xl">{item.name}</h3>
    </Link>
  );
};

interface RemoveBtnProp {
  ID: number;
}

const RemoveFromCart = ({ ID }: RemoveBtnProp) => {
  const { cart, setCart } = useCartContext();
  const RemoveFromSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10">
      <path
        d="M21 5L19 12H7.37671M20 16H8L6 3H3M13.5 3V9M13.5 3L11.5 5M13.5 3L15.5 5M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="#f0f8ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-darkreader-inline-stroke=""
        className="group-hover:stroke-purple-600 "></path>{" "}
    </svg>
  );

  const handleRemoveClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    ev.preventDefault();
    setCart({
      ...cart,
      results: cart.results.filter((item) => item.id !== ID),
      count: cart.count - 1,
    });
  };
  return (
    <button
      className="bg-purple-600 h-full w-full hover:bg-[#f0f8ff] focus:bg-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 transition-colors duration-200 text-base justify-center flex group"
      onClick={handleRemoveClick}>
      {RemoveFromSVG}
    </button>
  );
};

const CartIndicator = () => {
  const Cart = (
    <svg
      fill="#f0f8ff"
      viewBox="0 0 16.00 16.00"
      xmlns="http://www.w3.org/2000/svg"
      data-darkreader-inline-fill="">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"></path>
      </g>
    </svg>
  );
  return (
    <div className="w-[30%] h-auto bg-purple-600/50 right-0 bottom-[25%] absolute">
      {Cart}
    </div>
  );
};

const PriceContainer = ({ item }: ItemProp) => {
  const saleColor = item.pricing.onSale ? "text-purple-600" : "";

  return (
    <>
      {item.pricing.onSale ? (
        <div className="w-full flex items-center text-3xl col-span-2">
          {" "}
          <p className={`w-full text-center text-base  `}>
            <s>{item.pricing.price}$</s>
          </p>
          <p className={`w-full text-center text-3xl pr-2 ${saleColor}`}>
            {item.pricing.salePrice}$
          </p>
        </div>
      ) : (
        <p className={`w-full  text-3xl col-span-2 text-end pr-2 ${saleColor}`}>
          {item.pricing.price}$
        </p>
      )}
    </>
  );
};

const PlatformContainer = ({ item }: ItemProp) => {
  if (!item.platforms) {
    return;
  }
  return (
    <div className="flex flex-wrap gap-1 justify-start h-min pt-1">
      {item.platforms.map((plat) => (
        <span
          title={plat.platform.name}
          key={plat.platform.id}
          className="border-purple-800 border-2 p-1 rounded min-w-[2rem]">
          {platformsSVG[plat.platform.slug]}
        </span>
      ))}
    </div>
  );
};

const MetacritContainer = ({ item }: ItemProp) => {
  const metaColor =
    item.metacritic < 75
      ? "text-[#a66d00]"
      : item.metacritic < 50
      ? "text-[#8e000b]"
      : item.metacritic < 20
      ? "text-black"
      : "text-[#00a562]";

  return (
    <p
      className={`w-full flex  text-5xl col-start-1 row-span-2 items-center justify-center ${metaColor} h-full`}>
      {item.metacritic}
    </p>
  );
};

const RatingContainer = ({ item }: ItemProp) => {
  const ratingColor =
    item.rating < 4
      ? "text-[#a66d00]"
      : item.rating < 3
      ? "text-[#8e000b]"
      : item.rating < 1
      ? "text-black"
      : "text-[#00a562]";
  return (
    <p className={`w-full text-center text-3xl ${ratingColor}`}>
      {item.rating}
    </p>
  );
};
