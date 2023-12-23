export const fetchItem = async (url: string) => {
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
