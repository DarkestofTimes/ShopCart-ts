import { key } from "../key.ts";
import { Params } from "react-router-dom";

export const fetchData = async ({
  pageIndex,
  searchQ,
  tags,
  genres,
  releaseDate,
  metacrit,
  platform,
  publisher,
  ordering,
}: Params) => {
  const tag = tags && tags.length > 0 ? `&tags=${tags}` : "";
  const genre = genres && genres.length > 0 ? `&genres=${genres}` : "";
  const platforms =
    platform && platform.length > 0 ? `&platforms=${platform}` : "";
  const publishers =
    publisher && publisher.length > 0 ? `&publishers=${publisher}` : "";
  const pageNum = pageIndex ? `&page=${pageIndex}` : "";
  const searchQuery = searchQ ? `&search=${searchQ}` : "";
  const relDate =
    releaseDate && releaseDate.length > 10 ? `&dates=${releaseDate}` : "";
  const metacritic = metacrit ? `&metacritic=${metacrit}` : "";
  const order = ordering ? `&ordering=${ordering}` : "";

  const url = `https://api.rawg.io/api/games?key=${key}${tag}${genre}${platforms}${publishers}${pageNum}${searchQuery}${relDate}${metacritic}${order}`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const retrievedData = await response.json();
    console.log(retrievedData);
    return retrievedData;
  } catch (error) {
    console.error("Error:", error);
  }
};
