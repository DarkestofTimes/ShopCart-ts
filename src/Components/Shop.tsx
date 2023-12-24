import { Grid } from "./Grid";
import { DataItem } from "./ContextProvider";
import { useLoaderData } from "react-router-dom";
import { Layout } from "./Layout";

export const Shop = () => {
  const { data } = useLoaderData() as { data: DataItem };

  const routeValue = "shop";
  return (
    <Layout Items={data.results} data={data}>
      <Grid data={data} items={data.results} routeValue={routeValue} />
    </Layout>
  );
};
