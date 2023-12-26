import { key } from "../../key.ts";
import { fetchItem } from "../FetchItem.tsx";
import { splitParams } from "../splitParams.ts";
import { fakePricing } from "../fakePricing.ts";
import { Params } from "react-router-dom";
import { Item } from "../../Components/Context/ShopDataContext.tsx";

interface Request {
  params: Params;
}

interface dataProps {
  shopData: {
    current: Item;
  };
}

export const DataLoader =
  ({ shopData }: dataProps) =>
  async ({ params }: Request) => {
    const { page } = params;
    if (!page) {
      return;
    }

    const localStored = JSON.parse(localStorage.getItem("shopData")) || null;
    const data = localStored
      ? localStored[page]
      : shopData.current
      ? shopData.current[page]
      : null; //

    if (!data) {
      //

      const politeParams = splitParams(page!);

      const url = `https://api.rawg.io/api/games?key=${key}${Object.values(
        politeParams
      ).join("")}`;

      const result = await fetchItem(url);
      const data = fakePricing(result);
      shopData.current = {
        ...shopData.current,
        [page]: data,
      };
      localStorage.setItem("shopData", JSON.stringify(shopData.current));
      return { data };
    }

    return { data };
  };
