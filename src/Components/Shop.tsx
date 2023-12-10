import { ItemCard } from "./ItemCard";
import { Grid } from "./Grid";
import { useDataContext } from "./ContextProvider";

export const Shop = () => {
  const { data } = useDataContext();
  return (
    <Grid>
      {data.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};
