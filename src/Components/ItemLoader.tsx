import { fetchItem } from "./FetchItem";
import { fetchScreens } from "./FetchScreens";
import { fetchAdditions } from "./FetchAdditions";
import { fetchTrailers } from "./FetchTrailers";
import { fetchSeries } from "./FetchSeries";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const itemLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const [item, screens, additions, trailers, series] = await Promise.all([
    fetchItem(params),
    fetchScreens(params),
    fetchAdditions(params),
    fetchTrailers(params),
    fetchSeries(params),
  ]);

  return { item, screens, additions, trailers, series };
};
