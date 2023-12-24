import { ItemCard } from "./ItemCard";
import { ShopItems } from "./ContextProvider";

interface ItemListProps {
  items: ShopItems[];
  routeValue: string;
}

export const ItemList = ({ items, routeValue }: ItemListProps) => {
  return items.map((item) => (
    <ItemCard key={item.id} item={item} routeValue={routeValue} />
  ));
};
