import { fetchItem } from "./FetchItem";
import { key } from "../key.ts";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const ItemLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const item = JSON.parse(localStorage.getItem("item")) || null; //remove when finish with ItemPage
  const screens = JSON.parse(localStorage.getItem("screens")) || null;
  const additions = JSON.parse(localStorage.getItem("additions")) || null;
  const trailers = JSON.parse(localStorage.getItem("trailers")) || null;
  const series = JSON.parse(localStorage.getItem("series")) || null;
  if (
    item === null ||
    screens === null ||
    additions === null ||
    trailers === null ||
    series === null
  ) {
    //remove when finish with ItemPage
    const { itemId } = params;

    const urls = {
      item: `https://api.rawg.io/api/games/${itemId}?key=${key}`,
      screenshots: `https://api.rawg.io/api/games/${itemId}/screenshots?key=${key}`,
      series: `https://api.rawg.io/api/games/${itemId}/game-series?key=${key}`,
      additions: `https://api.rawg.io/api/games/${itemId}/additions?key=${key}`,
      trailers: `https://api.rawg.io/api/games/${itemId}/movies?key=${key}`,
    };

    const [item, screens, additions, trailers, series] = await Promise.all([
      fetchItem(urls.item),
      fetchItem(urls.screenshots),
      fetchItem(urls.additions),
      fetchItem(urls.trailers),
      fetchItem(urls.series),
    ]);
    localStorage.setItem("item", JSON.stringify(item)); //remove when finish with ItemPage
    localStorage.setItem("screens", JSON.stringify(screens));
    localStorage.setItem("additions", JSON.stringify(additions));
    localStorage.setItem("trailers", JSON.stringify(trailers));
    localStorage.setItem("series", JSON.stringify(series));

    return { item, screens, additions, trailers, series };
  } //remove when finish with ItemPage
  return { item, screens, additions, trailers, series };
};
