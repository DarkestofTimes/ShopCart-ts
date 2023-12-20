import { fetchItem } from "./FetchItem";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const itemLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const item = await fetchItem(params);
  return { item };
};
