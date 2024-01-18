import { fetchItem } from "../Functions/FetchItem.tsx";
import { Params } from "react-router-dom";

interface Request {
  params: Params;
}

interface Item {
  [key: string]: {
    genres: {
      results: {
        id: number;
        slug: string;
        name: string;
        games_count: number;
      }[];
    };
    platforms: {
      results: {
        id: number;
        slug: string;
        name: string;
        games_count: number;
      }[];
    };
    tags: {
      results: {
        id: number;
        slug: string;
        name: string;
        games_count: number;
      }[];
    };
  };
}
interface categoriesProps {
  categories: {
    current: Item;
  };
}

export const SidebarLoader =
  ({ categories }: categoriesProps) =>
  async ({ params }: Request) => {
    const catKeys = !params.page ? "firstKey" : params.page;

    const item = categories.current ? categories.current[catKeys] : null;
    const genres = item ? item.genres : null;
    const platforms = item ? item.platforms : null;
    const tags = item ? item.tags : null;

    if (!item) {
      const urls = {
        genres: `https://api.rawg.io/api/genres?&page=1&page_size=40`,
        platforms: `https://api.rawg.io/api/platforms?&page=1`,
        tags: `https://api.rawg.io/api/tags?&page=1&page_size=40`,
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

      return { genres, platforms, tags };
    }
    return { genres, platforms, tags };
  };
