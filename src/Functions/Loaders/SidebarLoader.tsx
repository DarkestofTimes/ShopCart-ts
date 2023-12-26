import { fetchItem } from "../FetchItem.tsx";
import { Item } from "../../Components/Context/ItemContext.tsx";
import { key } from "../../key.ts";
import { Params } from "react-router-dom";

interface Request {
  params: Params;
}

interface categoriesProps {
  categories: {
    current: Item;
  };
}

export const SidebarLoader =
  ({ categories }: categoriesProps) =>
  async ({ params }) => {
    const localStored = JSON.parse(localStorage.getItem("categories"));

    const item = localStored
      ? localStored
      : categories.current
      ? categories.current
      : null;
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

      categories.current = {
        details,
        screens,
        additions,
        trailers,
        series,
      };
      localStorage.setItem("ItemsObj", JSON.stringify(categories.current));

      return { details, screens, additions, trailers, series };
    }
    return { details, screens, additions, trailers, series };
  };
