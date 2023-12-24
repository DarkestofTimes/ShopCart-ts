import { key } from "../key.ts";
import { fetchItem } from "./FetchItem";
import { splitParams } from "./splitParams.ts";
import { fakePricing } from "./fakePricing.ts";
import { Params } from "react-router-dom";

interface Request {
  params: Params;
  ItemsContext: {
    shopItems: Items[];
    setShopItems: React.Dispatch<React.SetStateAction<Items[]>>;
  };
}

export interface Items {
  results: {
    id: number;
    background_image: string;
    genres: object[];
    rating: number;
    ratings_count: number;
    name: string;
  }[];
}

interface ShopProps {
  shopItems: Items[];
  setShopItems: React.Dispatch<React.SetStateAction<Items[]>>;
}

export const DataLoader =
  (shopItemsContext: ShopProps) =>
  async ({ params }: Request) => {
    const { page } = params;
    const { shopItems, setShopItems } = shopItemsContext;
    const localStored = JSON.parse(localStorage.getItem("shopItems")) || null;
    const data = localStored
      ? localStored[page!]
      : shopItems[page!]
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
