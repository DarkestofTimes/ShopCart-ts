import { useParams, useLoaderData, Params } from "react-router-dom";
import { NoSideLayout } from "./Layout";
import { ImgContainer } from "./ImgContainer";
import { ItemInfoContainer } from "./ItemInfoContainer";

interface LoaderData {
  item: {
    id: number;
    background_image: string;
    name: string;
  };
  screens: {
    results: {
      id: number;
      image: string;
      data?: {
        max: string;
      };
    }[];
  };
  additions: {
    results: {
      id: number;
      background_image: string;
      name: string;
    }[];
  };
  trailers: {
    results: {
      id: number;
      image?: string;
      data: {
        max: string;
      };
    }[];
  };
  series: {
    results: {
      id: number;
      background_image: string;
      name: string;
    }[];
  };
}

interface imgs {
  id: number;
  image?: string;
  name?: string;
  linkId?: number;
  routeValue?: string;
  data?: {
    max: string;
  };
}
[];

export const ItemPage = () => {
  const { page, itemId }: Params<string> = useParams();
  const { item, screens, additions, trailers, series } =
    useLoaderData() as LoaderData;
  const temp = [
    { id: 1, image: item.background_image },
    ...screens.results,
    ...trailers.results,
  ];
  const imgs: imgs[] = temp.map((t) => ({
    id: t.id,
    image: t.image ? t.image : undefined,
    name: undefined,
    linkId: undefined,
    routeValue: undefined,
    data: t.data
      ? {
          max: t.data.max,
        }
      : undefined,
  }));

  return (
    <NoSideLayout>
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-[80vh] p-8 gap-4">
        <ImgContainer imgs={imgs} />
        <div className="grid grid-rows-2">
          <SeriesContainer series={series} page={page} />
          <DLCContainer additions={additions} page={page} />
        </div>
        <ItemInfoContainer item={item} />
        {page === "shop" ? (
          <AddToCartBtn item={item} />
        ) : (
          <RemoveFromCartBtn item={item} />
        )}
      </section>
    </NoSideLayout>
  );
};

const AddToCartBtn = ({ item }) => {
  return (
    <button className="rounded col-span-3 m-auto border-2 border-black w-3/4 bg-green-600">
      Add to cart
    </button>
  );
};

const RemoveFromCartBtn = ({ item }) => {
  return (
    <button className="rounded col-span-3 m-auto border-2 border-black w-3/4 bg-yellow-600">
      Remove from cart
    </button>
  );
};

interface DLCProps {
  additions: {
    results: {
      id: number;
      background_image: string;
      name: string;
    }[];
  };
  page?: string;
}

const DLCContainer = ({ additions, page }: DLCProps) => {
  const imgs = additions.results.map((add) => ({
    id: add.id,
    image: add.background_image,
    name: add.name,
    linkId: add.id,
    routeValue: page,
  }));
  return <>{imgs.length !== 0 && <ImgContainer imgs={imgs} />}</>;
};

interface SeriesProps {
  series: {
    results: {
      id: number;
      background_image: string;
      name: string;
    }[];
  };
  page?: string;
}

const SeriesContainer = ({ series, page }: SeriesProps) => {
  const imgs = series.results.map((add) => ({
    id: add.id,
    image: add.background_image,
    name: add.name,
    linkId: add.id,
    routeValue: page,
  }));
  return <>{imgs.length !== 0 && <ImgContainer imgs={imgs} />}</>;
};
