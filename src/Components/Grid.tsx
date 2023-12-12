import { DataItem } from "./ContextProvider";
import { ItemList } from "./ItemList";
import { Paginator } from "./Paginator";
import { useParams } from "react-router-dom";
import { SortSelector } from "./SortSelector";

interface GridProps {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  routeValue: string;
}

export const Grid = ({ data, setData, routeValue }: GridProps) => {
  const { filter, search, pageIndex } = useParams();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,max(220px,17vw))] grid-rows-auto gap-4 p-4 col-span-3">
      <SortSelector items={data} setItems={setData} />
      <ItemList data={data} pageIndex={pageIndex} routeValue={routeValue} />
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
