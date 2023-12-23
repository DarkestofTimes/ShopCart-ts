import { key } from "../key.ts";
import { fetchItem } from "./FetchItem";
import { splitParams } from "./splitParams.ts";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const DataLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const { page } = params;

  const politeParams = splitParams(page!);

  const url = `https://api.rawg.io/api/games?key=${key}${Object.values(
    politeParams
  ).join("")}`;

  const data = await fetchItem(url);
  return { data };
};
