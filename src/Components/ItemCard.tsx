import { Link } from "react-router-dom";
import { ShopItem, usePricingContext } from "./Context/ContextProvider.tsx";
import { platformsSVG } from "./platformsSVG.tsx";

interface ItemCardProps {
  item: ShopItem | undefined;
  routeValue: string;
}

interface ItemProp {
  item: ShopItem;
}

export const ItemCard = ({ item, routeValue }: ItemCardProps) => {
  const { setPricing } = usePricingContext();
  if (!item) {
    return;
  }
  const handleClick = () => {
    setPricing({
      id: item.id,
      price: item.pricing.price,
      salePrice: item.pricing.salePrice,
      onSale: item.pricing.onSale,
      salePercent: item.pricing.salePercent,
    });
  };
  return (
    <Link
      to={`/items/${routeValue}/${item.id}`}
      className=" h-min w-min hover:scale-110 focus:scale-110 transition-all duration-200 ">
      <div
        className="border-solid border-2 border-purple-600 rounded w-[max(220px,15vw)]  aspect-square hover:border-[#f0f8ff] focus:border-[#f0f8ff]"
        onClick={handleClick}>
        <img
          src={item.background_image}
          alt={item.name}
          title={item.name}
          className="w-full h-full object-cover "
        />
        <div className="grid grid-cols-3  text-2xl font-bold items-center ">
          <MetacritContainer item={item} />
          <PriceContainer item={item} />
          <RatingContainer item={item} />
        </div>
      </div>
      <PlatformContainer item={item} />
      <h3 className="font-bold text-2xl">{item.name}</h3>
    </Link>
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
        <p
          className={`w-full text-center text-3xl col-span-2 text-end pr-2 ${saleColor}`}>
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
