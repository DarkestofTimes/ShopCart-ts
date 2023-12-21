import { useParams } from "react-router-dom";
import { NoSideLayout } from "./Layout";
import { ImgContainer } from "./ImgContainer";
import { useLoaderData, Params } from "react-router-dom";

interface LoaderData {
  item: {
    id: number;
    background_image: string;
  };
  screens: {
    results: {
      id: number;
      image: string;
    }[];
  };
  additions: object[];
  trailers: object[];
  series: object[];
}

export const ItemPage = () => {
  const { page, itemId }: Params<string> = useParams();
  const { item, screens, additions, trailers, series } =
    useLoaderData() as LoaderData;
  const imgs = [{ id: 1, image: item.background_image }, ...screens.results];
  return (
    <NoSideLayout>
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-4 p-4 ">
        <ImgContainer imgs={imgs} />
      </section>
    </NoSideLayout>
  );
};
