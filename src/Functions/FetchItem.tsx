export const fetchItem = async (urlString: string) => {
  const url = new URL("https://node-api-relay.onrender.com/rawg");
  url.searchParams.append("urlString", urlString);
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
