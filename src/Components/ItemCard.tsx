import { Link } from "react-router-dom";
import { Items } from "./ContextProvider";

interface ItemCardProps {
  item: Items | undefined;
  routeValue: string;
}

export const ItemCard = ({ item, routeValue }: ItemCardProps) => {
  if (!item) {
    return;
  }

  return (
    <Link to={`/items/${routeValue}/${item.id}`}>
      <div className="border-solid border-2 border-black w-[max(220px,15vw)]">
        <img src={item.background_image} alt="" className="w-auto h-auto" />
        <div className="flex flex-row gap-2 text-2xl font-bold">
          <p className="w-full text-center">{item.rating}</p>
          <p className="w-full text-center">{item.ratings_count}</p>
          <p className="w-full text-center">50$</p>
        </div>
      </div>
      <h3>{item.name}</h3>
    </Link>
  );
};
