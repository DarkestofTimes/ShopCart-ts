import { DataItem, Items } from "./ContextProvider";
import { ItemList } from "./ItemList";
import { Paginator } from "./Paginator";
import { useParams } from "react-router-dom";
/* import { SortSelector } from "./SortSelector"; */

interface GridProps {
  items: Items[];
  data: DataItem;
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
  routeValue: string;
}

export const Grid = ({
  data,
  items,
  /* setItems, */ routeValue,
}: GridProps) => {
  const { filter, search, pageIndex } = useParams();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,max(220px,17vw))] grid-rows-auto gap-4 p-4 col-span-3">
      {/* <SortSelector items={items} setItems={setItems} /> */}
      <ItemList items={items} routeValue={routeValue} />
      <Paginator
        data={data}
        pageIndex={pageIndex}
        routeValue={routeValue}
        filter={filter}
        search={search}
      />
    </div>
  );
};
