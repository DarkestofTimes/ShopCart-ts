import { ItemCard } from "./ItemCard";
import { ShopItem } from "./Context/ContextProvider";

interface ItemListProps {
  items: ShopItem[];
  routeValue: string;
}

export const ItemList = ({ items, routeValue }: ItemListProps) => {
  return items.map((item) => (
    <ItemCard key={item.id} item={item} routeValue={routeValue} />
  ));
};
