import { key } from "../key.ts";
import { Params } from "react-router-dom";

export const fetchSeries = async ({ itemId }: Params) => {
  const url = `https://api.rawg.io/api/games/${itemId}/game-series?key=${key}`;
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
