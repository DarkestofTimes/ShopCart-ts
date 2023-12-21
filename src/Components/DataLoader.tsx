import { fetchData } from "./FetchData";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const DataLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const data = await fetchData(params);
  return { data };
};
