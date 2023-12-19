import { Grid } from "./Grid";
import { useShopItemsContext, useDataContext } from "./ContextProvider";
import { useLoaderData } from "react-router-dom";

import { Layout } from "./Layout";

export const Shop = () => {
  const { data } = useLoaderData();
  const { shopItems, setShopItems } = useShopItemsContext();
  setShopItems(data.results);
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
