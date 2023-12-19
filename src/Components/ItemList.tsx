import { ItemCard } from "./ItemCard";
import { DataItem } from "./ContextProvider";

interface ItemListProps {
  data: DataItem[];
  pageIndex: string | undefined;
  routeValue: string;
}

export const ItemList = ({ items, pageIndex, routeValue }: ItemListProps) => {
  const dataArray = [...items];
  const atIndex = dataArray.splice(
    Number(pageIndex) === 1 ? 0 : (Number(pageIndex) - 1) * 20,
    20
  );
  return atIndex.map((item) => (
    <ItemCard key={item.id} item={item} routeValue={routeValue} />
  ));
};
