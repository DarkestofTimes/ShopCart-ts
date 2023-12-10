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
        // eslint-disable-next-line no-unused-vars
        setData((prevData) => [...retrievedData]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);
};
