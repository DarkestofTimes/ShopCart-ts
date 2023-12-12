import { Grid } from "./Grid";
import { useShopItemsContext } from "./ContextProvider";

export const Shop = () => {
  const { shopItems, setShopItems } = useShopItemsContext();
  const routeValue = "shop";
  return (
    <Grid data={shopItems} setData={setShopItems} routeValue={routeValue} />
  );
};
