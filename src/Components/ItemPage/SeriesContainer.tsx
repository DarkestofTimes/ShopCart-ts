import { ImgContainer } from "./ImgSlider/ImgContainer";

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

export const SeriesContainer = ({ series, page }: SeriesProps) => {
  const imgs = series.results.map((add) => ({
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
              Games in the Series
            </h2>
          </ImgContainer>
        </div>
      )}
    </>
  );
};
