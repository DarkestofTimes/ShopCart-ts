import { fetchItem } from "../Functions/FetchItem.tsx";
import { splitParams } from "../Functions/splitParams.ts";
import { fakePricing } from "../Functions/fakePricing.ts";
import { Params } from "react-router-dom";
import { Item } from "../Components/Context/ShopDataContext.tsx";

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

    const data = shopData.current ? shopData.current[page] : null;

    if (!data) {
      const politeParams = splitParams(page!);
      const url = `https://api.rawg.io/api/games?${Object.values(
        politeParams
      ).join("")}`;

      const result = await fetchItem(url);
      const data = fakePricing(result);
      shopData.current = {
        ...shopData.current,
        [page]: data,
      };

      return { data };
    }

    return { data };
  };
