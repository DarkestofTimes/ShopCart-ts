import { key } from "../key.ts";
import { fetchItem } from "./FetchItem";
import { splitParams } from "./splitParams.ts";
import { fakePricing } from "./fakePricing.ts";
import { LoaderFunctionArgs, LoaderFunction, Params } from "react-router-dom";

interface Request {
  params: Params;
}

export const DataLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<Request>) => {
  const data = JSON.parse(localStorage.getItem("data")) || null; //
  if (data === null) {
    //
    const { page } = params;

    const politeParams = splitParams(page!);

    const url = `https://api.rawg.io/api/games?key=${key}${Object.values(
      politeParams
    ).join("")}`;

    const result = await fetchItem(url);
    const data = fakePricing(result);

    localStorage.setItem("data", JSON.stringify(data)); //
    return { data };
  } //

  return { data };
};
