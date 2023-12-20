import { Grid } from "./Grid";
import { useShopItemsContext, DataItem } from "./ContextProvider";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./Layout";

export const Shop = () => {
  const { data } = useLoaderData() as { data: DataItem };
  const { shopItems, setShopItems } = useShopItemsContext();
  useEffect(() => {
    if (data.results) {
      setShopItems([...data.results]);
    }
  }, [data]);
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
