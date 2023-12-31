import { Grid } from "./Grid";
import { DataItem } from "./Context/ContextProvider";
import { useLoaderData } from "react-router-dom";
import { Layout } from "./Layout";
import { useCartContext } from "./Context/ContextProvider";

export const Shop = () => {
  const { data } = useLoaderData() as { data: DataItem };
  const { cart } = useCartContext();

  const updatedResults = data.results.map((item) => ({
    ...item,
    isInCart: cart.results.some((cartItem) => cartItem.id === item.id),
  }));
  const routeValue = "shop";

  return (
    <Layout>
      <Grid data={data} items={updatedResults} routeValue={routeValue} />
    </Layout>
  );
};
