import { key } from "../key.ts";
import { fetchItem } from "./FetchItem";
import { splitParams } from "./splitParams.ts";
import { fakePricing } from "./fakePricing.ts";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const DataLoader: LoaderFunction =
  (ItemsContext) =>
  async ({ params }: LoaderFunctionArgs<Request>) => {
    const { page } = params;
    const { shopItems, setShopItems } = ItemsContext;
    const localStored = JSON.parse(localStorage.getItem("shopItems")) || null;
    const data = localStored
      ? localStored[page!]
      : shopItems
      ? shopItems[page!]
      : null; //

    if (!data) {
      //

      const politeParams = splitParams(page!);

      const url = `https://api.rawg.io/api/games?key=${key}${Object.values(
        politeParams
      ).join("")}`;

      const result = await fetchItem(url);
      const data = fakePricing(result);
      setShopItems({
        ...shopItems,
        [page!]: data,
      });
      localStorage.setItem("shopItems", JSON.stringify(shopItems)); //
      return { data };
    } //

    return { data };
  };
