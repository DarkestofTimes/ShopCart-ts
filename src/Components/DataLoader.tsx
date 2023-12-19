import { fetchData } from "./FetchData";

export const dataLoader = async (request) => {
  const data = await fetchData(request.params);
  return { data };
};
