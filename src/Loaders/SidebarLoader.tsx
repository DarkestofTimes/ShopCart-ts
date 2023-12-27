import { fetchItem } from "../Functions/FetchItem.tsx";
import { Item } from "../Components/Context/ItemContext.tsx";
import { key } from "../key.ts";
import { Params } from "react-router-dom";

interface Request {
  params: Params;
}

interface categoriesProps {
  categories: {
    current: Item;
  };
}

export const SidebarLoader =
  ({ categories }: categoriesProps) =>
  async ({ params }: Request) => {
    const localStored = JSON.parse(localStorage.getItem("categories"));
    const catKeys = !params.page ? "firstKey" : params.page;

    const item = localStored
      ? localStored[catKeys]
      : categories.current
      ? categories.current[catKeys]
      : null;
    const genres = item ? item.genres : null;
    const platforms = item ? item.platforms : null;
    const tags = item ? item.tags : null;

    if (!item) {
      const urls = {
        genres: `https://api.rawg.io/api/genres?key=${key}&page=1&page_size=40`,
        platforms: `https://api.rawg.io/api/platforms?key=${key}&page=1`,
        tags: `https://api.rawg.io/api/tags?key=${key}&page=1&page_size=40`,
      };

      const [genres, platforms, tags] = await Promise.all([
        fetchItem(urls.genres),
        fetchItem(urls.platforms),
        fetchItem(urls.tags),
      ]);

      categories.current = {
        ...categories.current,
        [catKeys]: {
          genres,
          platforms,
          tags,
        },
      };
      localStorage.setItem("categories", JSON.stringify(categories.current));

      return { genres, platforms, tags };
    }
    return { genres, platforms, tags };
  };
