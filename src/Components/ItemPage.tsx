import { useParams } from "react-router-dom";
import { useDataContext } from "./ContextProvider";

export const ItemPage = () => {
  const { data } = useDataContext();
  const { id } = useParams();
  const item = data.find((item) => item.id === Number(id));
  return (
    <section className="min-h-[93vh] grid grid-cols-3 grid-rows-4 p-4">
      <ImgContainer item={item} />
    </section>
  );
};

const ImgContainer = ({ item }) => {
  return (
    <figure className="border-2 border-black border-solid grid grid-cols-4 col-span-2 row-span-3">
      <img src={item.image} alt="" className="w-full h-full col-span-3" />
      <div className="grid grid-rows-4">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </figure>
  );
};
