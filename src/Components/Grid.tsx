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
    <div className="grid sm:grid-cols-[repeat(auto-fill,max(220px,17vw))] grid-cols-[repeat(auto-fill,max(290px,17vw))] grid-rows-auto gap-2 p-4 col-span-full sm:col-span-3 h-min justify-center">
      {routeValue === "shop" ? (
        <SortSelector routeValue={routeValue} />
      ) : (
        <div className="col-span-full flex h-10 relative "></div>
      )}
      <ItemList items={items} routeValue={routeValue} />
      <Paginator data={data} routeValue={routeValue} />
    </div>
  );
};
