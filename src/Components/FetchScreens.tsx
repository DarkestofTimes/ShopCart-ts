import { key } from "../key.ts";
import { Params } from "react-router-dom";

export const fetchScreens = async ({ itemId }: Params) => {
  const url = `https://api.rawg.io/api/games/${itemId}/screenshots?key=${key}`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const retrievedData = await response.json();
    return retrievedData;
  } catch (error) {
    console.error("Error:", error);
  }
};
