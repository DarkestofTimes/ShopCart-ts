import { Grid } from "./Grid";
import { Layout } from "./Layout";
import { useShopItemsContext } from "./ContextProvider";

export const Cart = () => {
  const { shopItems, setShopItems } = useShopItemsContext();
  const routeValue = "cart";
  return (
    <Layout>
      <Grid data={shopItems} setData={setShopItems} routeValue={routeValue} />
    </Layout>
  );
};
