import { Grid } from "./Grid";
import { DataItem } from "./Context/ContextProvider";
import { useLoaderData } from "react-router-dom";
import { RightSideLayout } from "./Layout";

export const Cart = () => {
  const { CartData } = useLoaderData() as { CartData: DataItem };
  const routeValue = "cart";
  const items = CartData ? CartData.results : null;

  return (
    <RightSideLayout>
      {items && <Grid data={CartData} items={items} routeValue={routeValue} />}
    </RightSideLayout>
  );
};
