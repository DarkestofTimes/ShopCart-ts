import { ImgContainer } from "./ImgSlider/ImgContainer";

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

export const DLCContainer = ({ additions, page }: DLCProps) => {
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
