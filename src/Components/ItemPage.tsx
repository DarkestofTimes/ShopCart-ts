import { useParams } from "react-router-dom";
import { Items } from "./ContextProvider";
import { NoSideLayout } from "./Layout";
import { useLoaderData } from "react-router-dom";

interface item {}

interface ImgContainerProps {
  item: Items | undefined;
}

export const ItemPage = () => {
  const { page, itemId } = useParams();
  const { item } = useLoaderData();
  return (
    <NoSideLayout>
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-4 p-4">
        <ImgContainer item={item} />
      </section>
    </NoSideLayout>
  );
};

const ImgContainer = ({ item }: ImgContainerProps) => {
  if (!item) {
    return;
  }
  return (
    <figure className="border-2 border-black border-solid grid grid-cols-4 col-span-2 row-span-3">
      <img
        src={item.background_image}
        alt=""
        className="w-full h-full col-span-3"
      />
      <div className="grid grid-rows-4">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </figure>
  );
};
