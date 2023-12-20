import { ItemCard } from "./ItemCard";
import { Items } from "./ContextProvider";

interface ItemListProps {
  items: Items[];
  routeValue: string;
}

export const ItemList = ({ items, routeValue }: ItemListProps) => {
  return items.map((item) => (
    <ItemCard key={item.id} item={item} routeValue={routeValue} />
  ));
};
