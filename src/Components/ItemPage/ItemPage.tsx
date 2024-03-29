import { useParams, useLoaderData, Params } from "react-router-dom";
import { NoSideLayout } from "../Layout";
import { ImgContainer } from "./ImgSlider/ImgContainer";
import { ItemInfoContainer } from "./ItemInfoContainer/ItemInfoContainer";
import { DLCContainer } from "./DLCContainer";
import { SeriesContainer } from "./SeriesContainer";

interface LoaderData {
  details: {
    id: number;
    background_image: string;
    name: string;
    esrb_rating?: {
      id: number;
      name: string;
      slug: string;
    };
    developers?: {
      id: number;
      name: string;
      slug: string;
    }[];
    rating?: number;
    ratings_count?: number;
    ratings?: {
      id: number;
      percent: number;
      title: string;
      count: number;
    }[];
    metacritic?: number;
    platforms?: {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
    }[];
    genres?: {
      id: number;
      name: string;
      slug: string;
    }[];
    description?: string;
    released: string;
    tba?: boolean;
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
  const { details, screens, additions, trailers, series } =
    useLoaderData() as LoaderData;
  const temp = [
    { id: 1, image: details.background_image },
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
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-[75vh] lg:p-8 p-2 pt-6 gap-4 ">
        <div className="lg:col-span-2  col-span-full h-full flex">
          <ImgContainer imgs={imgs} />
        </div>
        <div className="grid grid-rows-2 col-span-full lg:col-span-1 gap-2 sm:max-h-[60vh] md:max-h-[60vh] lg:max-h-full max-h-[50vh]">
          <SeriesContainer series={series} page={page} />
          <DLCContainer additions={additions} page={page} />
        </div>
        <ItemInfoContainer details={details} page={page} />
      </section>
    </NoSideLayout>
  );
};
