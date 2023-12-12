import { Grid } from "./Grid";
import { useShopItemsContext } from "./ContextProvider";
import { Layout } from "./Layout";

export const Shop = () => {
  const { shopItems, setShopItems } = useShopItemsContext();
  const routeValue = "shop";
  return (
    <Layout>
      <Grid data={shopItems} setData={setShopItems} routeValue={routeValue} />
    </Layout>
  );
};
