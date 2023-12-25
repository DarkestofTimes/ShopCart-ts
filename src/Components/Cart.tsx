import { Grid } from "./Grid";
import { Layout } from "./Layout";
import { useShopDataContext } from "./Context/ContextProvider";

export const Cart = () => {
  const { shopData, setShopData } = useShopDataContext();
  const routeValue = "cart";
  return (
    <Layout>
      <Grid data={shopData} setData={setShopData} routeValue={routeValue} />
    </Layout>
  );
};
