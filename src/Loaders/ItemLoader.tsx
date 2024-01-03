import { fetchItem } from "../Functions/FetchItem.tsx";
import { key } from "../key.ts";
import { Params } from "react-router-dom";

interface Request {
  params: Params;
}

interface Item {
  [key: string]: {
    details: {
      id: number;
      background_image: string;
      name: string;
      released: string;
    };
    screens: {
      results: {
        id: number;
        image: string;
        data?: {
          max: string;
        };
      }[];
    };
    additions: {
      results: {
        id: number;
        background_image: string;
        name: string;
      }[];
    };
    trailers: {
      results: {
        id: number;
        image?: string;
        data: {
          max: string;
        };
      }[];
    };
    series: {
      results: {
        id: number;
        background_image: string;
        name: string;
      }[];
    };
  };
}

interface itemsProps {
  Items: {
    current: Item;
  };
}

export const ItemLoader =
  ({ Items }: itemsProps) =>
  async ({ params }: Request) => {
    const { itemId } = params;
    if (!itemId) {
      return;
    }

    const item = Items.current ? Items.current[itemId] : null;
    const details = item ? item.details : null;
    const screens = item ? item.screens : null;
    const additions = item ? item.additions : null;
    const trailers = item ? item.trailers : null;
    const series = item ? item.series : null;
    if (!item) {
      const urls = {
        details: `https://api.rawg.io/api/games/${itemId}?key=${key}`,
        screenshots: `https://api.rawg.io/api/games/${itemId}/screenshots?key=${key}`,
        series: `https://api.rawg.io/api/games/${itemId}/game-series?key=${key}`,
        additions: `https://api.rawg.io/api/games/${itemId}/additions?key=${key}`,
        trailers: `https://api.rawg.io/api/games/${itemId}/movies?key=${key}`,
      };

      const [details, screens, additions, trailers, series] = await Promise.all(
        [
          fetchItem(urls.details),
          fetchItem(urls.screenshots),
          fetchItem(urls.additions),
          fetchItem(urls.trailers),
          fetchItem(urls.series),
        ]
      );

      Items.current = {
        ...Items.current,
        [itemId]: {
          details,
          screens,
          additions,
          trailers,
          series,
        },
      };

      return { details, screens, additions, trailers, series };
    }
    return { details, screens, additions, trailers, series };
  };
