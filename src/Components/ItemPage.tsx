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

export const ItemPage = () => {
  const { page }: Params<string> = useParams();
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
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-[80vh] p-8 gap-4 ">
        <div className="col-span-2 h-full flex">
          <ImgContainer imgs={imgs} />
        </div>
        <div className="grid grid-rows-2">
          <SeriesContainer series={series} page={page} />
          <DLCContainer additions={additions} page={page} />
        </div>
        <ItemInfoContainer item={item} page={page} />
      </section>
    </NoSideLayout>
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
  return (
    <>
      {imgs.length > 0 && (
        <div className="relative flex h-full w-full">
          <ImgContainer imgs={imgs}>
            <h2 className="absolute top-0 left-0 z-10 bg-purple-800/75 text-white p-1 text-xl font-bold">
              DLC and Editions
            </h2>
          </ImgContainer>
        </div>
      )}
    </>
  );
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
  console.log(imgs);
  return (
    <>
      {imgs.length > 0 && (
        <div className="relative flex h-full w-full">
          <ImgContainer imgs={imgs}>
            <h2 className="absolute top-0 left-0 z-10 bg-purple-800/75 text-white p-1 text-xl font-bold">
              Games in the Series
            </h2>
          </ImgContainer>
        </div>
      )}
    </>
  );
};
