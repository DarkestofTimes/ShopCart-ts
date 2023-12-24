import { key } from "../key.ts";
import { fetchItem } from "./FetchItem";
import { splitParams } from "./splitParams.ts";
import { fakePricing } from "./fakePricing.ts";
import { Params } from "react-router-dom";
import { ShopProps } from "./ContextProvider";

interface Request {
  params: Params;
}

export const DataLoader =
  (shopDataContext: ShopProps) =>
  async ({ params }: Request) => {
    const { page } = params;
    if (!page) {
      return;
    }
    const { shopData, setShopData } = shopDataContext;
    const localStored = JSON.parse(localStorage.getItem("shopData")) || null;
    const data = localStored
      ? localStored[page]
      : shopData[page]
      ? shopData[page]
      : null; //

    if (!data) {
      //

      const politeParams = splitParams(page!);

      const url = `https://api.rawg.io/api/games?key=${key}${Object.values(
        politeParams
      ).join("")}`;

      const result = await fetchItem(url);
      const data = fakePricing(result);
      setShopData({
        ...shopData,
        [page]: data,
      });
      localStorage.setItem("shopData", JSON.stringify(shopData)); //
      return { data };
    } //

    return { data };
  };
