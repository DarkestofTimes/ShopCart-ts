import { useEffect } from "react";
import { useDataContext } from "./ContextProvider";

export const FetchData = () => {
  const { data, setData } = useDataContext();

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const retrievedData = await response.json();
        setData(() => [...retrievedData]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (data.length === 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return null;
};
