import { useEffect } from "react";
import { useDataContext, useLoadingContext } from "./ContextProvider";
import { key } from "../key.ts";

export const useFetchData = () => {
  const { setData } = useDataContext();
  const { setLoading } = useLoadingContext();

  const fetchData = async ({
    page,
    searchQ,
    tags,
    genres,
    releaseDate,
    metacrit,
    platform,
    publisher,
    ordering,
  }) => {
    const tag = tags && tags.length > 0 ? `&tags=${tags.join(",")}` : "";
    const genre =
      genres && genres.length > 0 ? `&genres=${genres.join(",")}` : "";
    const platforms =
      platform && platform.length > 0 ? `&platforms=${platform.join(",")}` : "";
    const publishers =
      publisher && publisher.length > 0
        ? `&publishers=${publisher.join(",")}`
        : "";
    const pageNum = page ? `&page=${page}` : "";
    const searchQuery = searchQ ? `&search=${searchQ}` : "";
    const relDate =
      releaseDate && releaseDate.length > 1
        ? `&dates=${releaseDate[0]},${releaseDate[1]}`
        : "";
    const metacritic = metacrit ? `&metacritic=${metacrit}` : "";
    const order = ordering ? `&ordering=${ordering}` : "";

    const url = `https://api.rawg.io/api/games?key=${key}`;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const retrievedData = await response.json();
      setData(() => retrievedData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return { fetchData };
};

export const InitialFetch = () => {
  const { data } = useDataContext();
  const { fetchData } = useFetchData();

  useEffect(() => {
    if (data.length === 0) {
      const params = {
        page: 1,
      };
      fetchData(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return null;
};
