import { DataItem, ShopItem } from "./Context/ContextProvider";
import { ItemList } from "./ItemList";
import { Paginator } from "./Paginator";
import { SortSelector } from "./SortSelector";

interface GridProps {
  items: ShopItem[];
  data: DataItem;
  routeValue: string;
}

export const Grid = ({ data, items, routeValue }: GridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,max(220px,17vw))] grid-rows-auto gap-4 p-4 col-span-3 mt-10">
      {<SortSelector routeValue={routeValue} />}
      <ItemList items={items} routeValue={routeValue} />
      <Paginator data={data} routeValue={routeValue} />
    </div>
  );
};
