import { ItemCard } from "./ItemCard";
import { DataItem } from "./ContextProvider";

interface ItemListProps {
  data: DataItem[];
  pageIndex: string | undefined;
  routeValue: string;
}

export const ItemList = ({ items, pageIndex, routeValue }: ItemListProps) => {
  return items.map((item) => (
    <ItemCard key={item.id} item={item} routeValue={routeValue} />
  ));
};
