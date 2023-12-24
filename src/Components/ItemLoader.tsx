import { fetchItem } from "./FetchItem";
import { key } from "../key.ts";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const ItemLoader =
  (ItemContext) =>
  async ({ params }: LoaderFunctionArgs<Request>) => {
    const { itemId } = params;
    const { Items, setItems } = ItemContext;
    const localStored = JSON.parse(localStorage.getItem("ItemsObj"));
    const item = localStored
      ? localStored[itemId]
      : Items[itemId]
      ? Items[itemId]
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
      setItems({
        ...Items,
        [itemId]: {
          details,
          screens,
          additions,
          trailers,
          series,
        },
      });
      localStorage.setItem("ItemsObj", JSON.stringify(Items));

      return { details, screens, additions, trailers, series };
    } //remove when finish with ItemPage
    return { details, screens, additions, trailers, series };
  };
