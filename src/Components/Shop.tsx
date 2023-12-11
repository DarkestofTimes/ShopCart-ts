import { Grid } from "./Grid";
import { ItemList } from "./ItemList";
import { Paginator } from "./Paginator";
import { useDataContext } from "./ContextProvider";
import { useParams } from "react-router-dom";

export const Shop = () => {
  const { sort, search, pageIndex } = useParams();
  const { data } = useDataContext();
  const routeValue = "shop";
  return (
    <Grid>
      <ItemList data={data} pageIndex={pageIndex} />
      <Paginator
        data={data}
        pageIndex={pageIndex}
        routeValue={routeValue}
        sort={sort}
        search={search}
      />
    </Grid>
  );
};
