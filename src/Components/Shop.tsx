import { Grid } from "./Grid";
import { useShopItemsContext, useDataContext } from "./ContextProvider";

import { Layout } from "./Layout";

export const Shop = () => {
  const { data } = useDataContext();
  const { shopItems, setShopItems } = useShopItemsContext();
  const routeValue = "shop";
  return (
    <Layout Items={shopItems} data={data} setItems={setShopItems}>
      <Grid
        data={data}
        items={shopItems}
        setItems={setShopItems}
        routeValue={routeValue}
      />
    </Layout>
  );
};
